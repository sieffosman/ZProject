import smtplib
from email.message import EmailMessage
from flask import Flask, request

app = Flask(__name__)

@app.route('/submit_form', methods=['POST'])
def submit_form():
    # Retrieve form data
    first_name = request.form['firstName']
    last_name = request.form['lastName']
    email = request.form['email']
    message = request.form['message']

    # Compose the email
    msg = EmailMessage()
    msg.set_content(f"First Name: {first_name}\nLast Name: {last_name}\nEmail: {email}\nMessage: {message}")
    msg['Subject'] = 'New form submission'
    msg['From'] = email
    msg['To'] = 'your-email@example.com'  # Replace with your email address

    # Send the email
    try:
        with smtplib.SMTP('your-smtp-server.com', 587) as smtp:
            smtp.ehlo()
            smtp.starttls()
            smtp.ehlo()
            smtp.login('your-email@example.com', 'your-password')  # Replace with your email account credentials
            smtp.send_message(msg)
        return 'Email sent successfully.'
    except Exception as e:
        return 'Error sending email: ' + str(e)

if __name__ == '__main__':
    app.run()
