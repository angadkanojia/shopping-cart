import { NextResponse } from 'next/server'
import { prisma } from "../db";


export async function REQUEST() {
  
  try {
    return await prisma.find_users.findFirst({});
      
  } catch (error: any) {
    throw new Error(`Failed to delete data from database: ${error.message}`);
  }
}



