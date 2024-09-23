
import { NextResponse } from 'next/server';
import { prisma } from '../db'; 


export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    console.log(username,password)
    if (!username || !password) {
      return NextResponse.json({ message: 'Username and password are required.' }, { status: 400 });
    }

    
    const user = await prisma.user.findUnique({
      where: { username },
    });

    
    if (user && password=== user.password) {
      return NextResponse.json({ message: 'Login successful!' });
    } else {
      return NextResponse.json({ message: 'Invalid username or password.' }, { status: 401 });
    }
  } catch (error: any) {
    console.error('Failed to login:', error);
    return NextResponse.json({ error: 'Failed to login' }, { status: 500 });
  }
}
