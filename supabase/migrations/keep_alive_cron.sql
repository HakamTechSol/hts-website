-- Enable pg_cron extension on Supabase database
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Schedule a daily ping query to ensure the database remains active 24/7
SELECT cron.schedule(
  'keep-supabase-project-active',
  '0 0 * * *', -- Runs every day at 00:00 UTC
  $$ SELECT 1; $$
);
