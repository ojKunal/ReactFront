import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ahtnxguebjyvrzcgqany.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodG54Z3VlYmp5dnJ6Y2dxYW55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2MjM4MDEsImV4cCI6MjAyOTE5OTgwMX0.LWMA4r9wPmpyX0SvRZ4xb1jce53tC1lhky1GYTcZ8P4"
);