import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "5db36c2fe15346",
		pass: "a62d9d05093960"
	}
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({subject, body}: SendMailData) {

		await transport.sendMail({
			from: 'Equipe Feedget <oi@feedget.com>',
			to: 'Kayque <kayqueprado2013@gmail.com>',
			subject: subject,
			html: body 
		})

	}
}