# Supabase Database Setup for Email Subscriptions

## Create the Subscribers Table

You need to create a `subscribers` table in your Supabase database. Here's how:

### Option 1: Using Supabase SQL Editor (Recommended)

1. Go to your Supabase project: https://fhkoiqkvcqtdzysgowzz.supabase.co
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste this SQL:

```sql
-- Create subscribers table
CREATE TABLE IF NOT EXISTS subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);

-- Enable Row Level Security (RLS)
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from service role
CREATE POLICY "Allow service role to insert subscribers"
  ON subscribers
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Create policy to allow service role to select subscribers
CREATE POLICY "Allow service role to select subscribers"
  ON subscribers
  FOR SELECT
  TO service_role
  USING (true);

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_subscribers_updated_at
  BEFORE UPDATE ON subscribers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

5. Click **Run** to execute the SQL

### Option 2: Using Supabase Table Editor

1. Go to **Table Editor** in the left sidebar
2. Click **New Table**
3. Set table name: `subscribers`
4. Add columns:
   - `id` - Type: `uuid`, Default: `gen_random_uuid()`, Primary Key
   - `email` - Type: `text`, Unique constraint enabled
   - `created_at` - Type: `timestamptz`, Default: `now()`
   - `updated_at` - Type: `timestamptz`, Default: `now()`
5. Click **Save**

## Verify Table Creation

After creating the table:

1. Go to **Table Editor**
2. You should see `subscribers` in the list
3. Click on it to verify the columns are correct

## Test the Email Subscription

Once the table is created:

1. Go to your app (local or Vercel)
2. Enter a test email
3. Submit the form
4. Check the `subscribers` table in Supabase to see if the email was added

## Troubleshooting

### "relation 'subscribers' does not exist"
- The table hasn't been created yet. Follow the steps above.

### "duplicate key value violates unique constraint"
- The email is already in the database. This is expected behavior.

### Email not being sent
- Check your Resend API key is correct
- Verify the "from" email in the code matches your Resend domain
- Check Resend dashboard for error logs
