import { createClient as createSupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sfgsozzpmlzohjbiihdk.supabase.co'
const supabaseAnonKey = 'sb_publishable_XMw7bz3TKImzxRNs--_hrw_YhT9DKP2'

export function createClient() {
  return createSupabaseClient(supabaseUrl, supabaseAnonKey)
}