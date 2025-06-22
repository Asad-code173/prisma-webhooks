import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { WebhookEvent } from '@clerk/nextjs/server' // 👈 Import event type
import { NextRequest } from 'next/server'
import prisma from '../../../lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const evt = (await verifyWebhook(req)) as WebhookEvent;

    const eventType = evt.type;

    if (eventType === 'user.created') {
      const user = evt.data; // Narrowed to UserJSON here ✅

      await prisma.user.create({
        data: {
          clerkId: user.id,
          email: user.email_addresses?.[0]?.email_address ?? '',
          name: user.first_name ?? null,
        },
      });

      console.log('User created in DB with Clerk ID:', user.id);
    }

    return new Response('Webhook received', { status: 200 });
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error verifying webhook', { status: 400 });
  }
}
