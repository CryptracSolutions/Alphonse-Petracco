export const config = { runtime: 'edge' };

export default async function handler(req) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { messages, context } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Messages array is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const systemPrompt = `You are a helpful legal assistant for Lion Law, a premier personal injury law firm led by Alphonse Petracco.

WEBSITE CONTENT FOR REFERENCE:
${context || 'No additional context provided.'}

GUIDELINES:
1. Be professional, empathetic, and helpful at all times
2. Use the website content above to provide accurate, specific information about Lion Law
3. Only discuss topics related to Lion Law and personal injury law
4. NEVER provide specific legal advice - always recommend scheduling a consultation with an attorney
5. When users want to schedule a consultation, become a client, or discuss their case, direct them to the contact page at /contact.html
6. If you don't have information to answer a question, acknowledge this honestly and offer to connect them with the firm
7. Keep responses concise but thorough - aim for 2-4 sentences unless more detail is needed
8. Show empathy when users describe injuries or difficult situations
9. Highlight Lion Law's experience, track record, and commitment to clients when relevant

EXAMPLE RESPONSES:
- For consultation requests: "I'd be happy to help you connect with our team for a free consultation. You can reach us through our contact page at /contact.html or call us directly. Would you like me to tell you what to expect during your consultation?"
- For case questions: "Based on what you've described, this sounds like it could be a [type] case. However, every situation is unique, and I'd recommend speaking directly with one of our attorneys who can evaluate your specific circumstances. Would you like to schedule a free consultation?"`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        stream: true,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      return new Response(JSON.stringify({ error: 'Failed to get response from AI' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Stream the response back to the client
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
