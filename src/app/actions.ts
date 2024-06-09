'use server';

import { streamObject, generateObject } from 'ai';
import { openai as oai, createOpenAI  } from '@ai-sdk/openai';
import { createStreamableValue } from 'ai/rsc';
import { z } from 'zod';

export async function generate(input: string, apiKey?: string) {
  'use server';

  let openai = oai;
  if (apiKey != null) {
    openai = createOpenAI({ apiKey, compatibility: 'strict' });
  }

  try {
    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo-16k'),
      system: (
        'You are a classifier. Your job is to classify text and return a JSON response. ' 
        + 'Classify array of text into given labels:'
        + '"Important", "Marketing", "General", "Social", "Spam", "Promotion". '
        + 'Here\'s the description of the labels. '
        + 'Important: Emails that are personal or work-related and require immediate attention. '
        + 'Promotions: Emails related to sales, discounts, and marketing campaigns. '
        + 'Social: Emails from social networks, friends, and family. '
        + 'Marketing: Emails related to marketing, newsletters, and notifications. '
        + 'Spam: Unwanted or unsolicited emails. '
        + 'General: If none of the above are matched, use General. '
        + `
        The schema of response JSON is as such:
        {data: [
            { id: <id>,  label: <label> },
            ...
        ]}`
      ),
      prompt: input,
      schema: z.object({
        data: z.array(
          z.object({
            id: z.number(), 
            label: z.string(),
          })
        )
      }),
    });
    return {object: JSON.stringify(object, null, 2), error: null};
  } catch (err) {
    return {object: "", error: {message: err.message, type: typeof(err)}}
  };

}

export async function generateStream(input: string) {
  'use server';

  try {
    const stream = createStreamableValue();

    (async () => {
      const { partialObjectStream } = await streamObject({
        model: openai('gpt-3.5-turbo-16k'),
        system: (
          'You are a classifier. Your job is to classify text and return a JSON response. ' 
          + 'Classify array of text into given labels:'
          + '"Important", "Marketing", "General", "Social", "Spam", "Promotion". '
          + 'Here\'s the description of the labels. '
          + 'Important: Emails that are personal or work-related and require immediate attention. '
          + 'Promotions: Emails related to sales, discounts, and marketing campaigns. '
          + 'Social: Emails from social networks, friends, and family. '
          + 'Marketing: Emails related to marketing, newsletters, and notifications. '
          + 'Spam: Unwanted or unsolicited emails. '
          + 'General: If none of the above are matched, use General. '
          + `
          The schema of response JSON is as such:
          {data: [
              { id: <id>,  label: <label> },
              ...
          ]}`
        ),
        prompt: input,
        schema: z.object({
          data: z.array(
            z.object({
              id: z.number(), label: z.string()
            })
          )
        }),
      });

      for await (const partialObject of partialObjectStream) {
        stream.update(partialObject);
      }

      stream.done();
    })();

    return { object: stream.value };
  } catch (err) {
    return { error: err.message, object: '' };
  }
}

// Unhandled APICallError 