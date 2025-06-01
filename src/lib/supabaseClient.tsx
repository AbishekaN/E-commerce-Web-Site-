import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ttpdatyvqyrgwibybzxo.supabase.co"; // replace with your URL
const supabaseAnonKey = "DgI8q4SZRHaYq1gbr0dlbrZkAun/kfbtRazCzMuEEz9FFOrvnyEqJR7mzpned20rRQEeTkzLXjeFTiUFwNC+UA=="; // replace with your anon public key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
