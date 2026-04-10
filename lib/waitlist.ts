import { supabase } from '@/lib/supabase';
import type { WaitlistEntry } from '@/types';

export async function addToWaitlist(
  email: string,
  type: 'fan' | 'creator'
): Promise<WaitlistEntry> {
  const { data, error } = await supabase
    .from('waitlist')
    .insert({ email: email.toLowerCase(), type })
    .select('email, type, created_at')
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return {
    email: data.email,
    type: data.type,
    createdAt: data.created_at,
  };
}

export async function isEmailRegistered(email: string): Promise<boolean> {
  const { data } = await supabase
    .from('waitlist')
    .select('email')
    .eq('email', email.toLowerCase())
    .maybeSingle();

  return data !== null;
}
