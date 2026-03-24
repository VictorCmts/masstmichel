import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  dates?: string;
  type?: string;
  arrival?: string;
  departure?: string;
  guests?: string;
  room?: string;
  phone?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // Validate required fields
    if (!body.email || !body.name) {
      return NextResponse.json(
        { error: 'Missing required fields: name and email are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // TODO: Integrate with Resend (https://resend.com) for production email sending
    // Example with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Mas Saint Michel <noreply@masstmichel.fr>',
    //   to: 'contact@masstmichel.fr',
    //   subject: body.type === 'reservation' ? 'Nouvelle demande de réservation' : 'Nouveau message de contact',
    //   html: `<p>...</p>`,
    // });

    // For now, log to console
    console.log('[API Contact] New submission:', {
      type: body.type || 'contact',
      name: body.name,
      email: body.email,
      dates: body.dates || `${body.arrival} → ${body.departure}`,
      room: body.room,
      guests: body.guests,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Message received. We will reply within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API Contact] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
