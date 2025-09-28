import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder } from '@angular/forms';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase: SupabaseClient;

  constructor(private fb: FormBuilder) {
    this.supabase = createClient(
      'https://edgzjabxcqfmkghmvizj.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkZ3pqYWJ4Y3FmbWtnaG12aXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0OTQxNDIsImV4cCI6MjA3MjA3MDE0Mn0.xPrCWXnk2ua6x-xo2jt8KJ52hFAu3-_aYpHdbSlW0VE'
    );
  }
  async signUp(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    return data;
  }

  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  }

  async getUser() {
    const {
      data: { user },
    } = await this.supabase.auth.getUser();
    return user;
  }
}
