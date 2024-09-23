import { NextResponse } from "next/server";
import { prisma } from "../db";
import jwt from "jsonwebtoken";

const SECRET_KEY = "angdev";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    //console.log(username, password);
    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password are required." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findFirst({
      where: { username },
    });
    //console.log(user);
    if (user && password === user.password) {
      const token = jwt.sign(
        { id: user.id, username: user.username },
        SECRET_KEY,
        { expiresIn: "1h" }
      );
      return NextResponse.json({ message: "Login successful!" });
    } else {
      return NextResponse.json(
        { message: "Invalid username or password." },
        { status: 401 }
      );
    }
  } catch (error: any) {
    console.error("Failed to login:", error);
    return NextResponse.json({ error: "Failed to login" }, { status: 500 });
  }
}
