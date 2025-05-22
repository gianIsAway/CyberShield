// src/lib/supabaseApi.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zwqhmncjpjqulybbvizi.supabase.co/';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3cWhtbmNqcGpxdWx5YmJ2aXppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NzUxODAsImV4cCI6MjA2MzQ1MTE4MH0.QzGluchY94zY1T734haFzQBQhp3Atg2NtFAzSf_4MPE';

export async function salvarDenuncia(dados) {
     console.log('Enviando dados para Supabase:', dados);
  const response = await fetch(`${SUPABASE_URL}/rest/v1/denuncias`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_API_KEY,
      'Authorization': `Bearer ${SUPABASE_API_KEY}`,
      'Prefer': 'return=representation'
    },
    body: JSON.stringify(dados),
  });

  return response.json();
}

export async function buscarDenuncias() {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/denuncias`, {
    method: 'GET',
    headers: {
      'apikey': SUPABASE_API_KEY,
      'Authorization': `Bearer ${SUPABASE_API_KEY}`,
    }
  });

  return response.json();
}
