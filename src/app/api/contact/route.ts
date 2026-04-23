import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun.' },
        { status: 400 }
      );
    }

    const subjectLabels: { [key: string]: string } = {
      proje: 'Yeni Proje Talebi',
      renovasyon: 'Renovasyon',
      danismanlik: 'Danışmanlık',
      diger: 'Diğer',
    };

    const { data, error } = await resend.emails.send({
      from: 'MONART Web Sitesi <onboarding@resend.dev>',
      to: ['monartyapimimarlik@gmail.com'],
      replyTo: email,
      subject: `🏗️ ${subjectLabels[subject] || subject} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #171717; color: white; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 30px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
            .value { margin-top: 5px; font-size: 16px; }
            .message-box { background: white; padding: 20px; border-left: 4px solid #8B7355; margin-top: 10px; }
            .footer { text-align: center; padding: 20px; color: #999; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>MONART Mimarlık</h1>
              <p style="margin: 10px 0 0; opacity: 0.8;">Yeni İletişim Formu Mesajı</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Ad Soyad</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">E-posta</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">Telefon</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Konu</div>
                <div class="value">${subjectLabels[subject] || subject}</div>
              </div>
              <div class="field">
                <div class="label">Mesaj</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              Bu mesaj monartmimarlik.com iletişim formu üzerinden gönderilmiştir.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'E-posta gönderilemedi. Lütfen daha sonra tekrar deneyin.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    );
  }
}
