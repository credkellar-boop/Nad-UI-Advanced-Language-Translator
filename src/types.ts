import { z } from 'zod';

// Base schema validation for incoming custom translation dictionaries
export const ResourceSchema = z.record(z.string(), z.any());

export type TranslationResource = z.infer<typeof ResourceSchema>;

export interface TranslatorOptions {
  fallbackLng?: string;
  debug?: boolean;
}
