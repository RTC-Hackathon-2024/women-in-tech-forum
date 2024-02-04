import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dfkwvacnmnhrohyreexy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRma3d2YWNubW5ocm9oeXJlZXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MDUxOTIsImV4cCI6MjAwNjk4MTE5Mn0.fe1Dx1LFI4fXBTdKkQmhjR0S4zBpEFLFz4d-NhFKcvE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
