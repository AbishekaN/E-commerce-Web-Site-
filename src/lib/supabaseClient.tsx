import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ttpdatyvqyrgwibybzxo.supabase.co"; // replace with your URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0cGRhdHl2cXlyZ3dpYnlienhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NjY5NDAsImV4cCI6MjA2NDM0Mjk0MH0.WzybSeHATno2LLkbjdiJg_TVk6j34UIjKy2AMSGmUNE"; // replace with your anon public key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);  
