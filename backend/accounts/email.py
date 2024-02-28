import random
import string
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.core.mail import EmailMessage
from django.core.mail import send_mail
import smtplib

def passwordGenerator():

    length = 12

    characters = string.ascii_letters + string.digits + string.punctuation

    # Ensure at least one character from each category
    password = random.choice(string.ascii_uppercase) + random.choice(string.ascii_lowercase) + random.choice(string.digits) + random.choice(string.punctuation)

    # Generate the remaining characters randomly
    password += ''.join(random.choice(characters) for _ in range(length - len(password)))

    # Shuffle the characters to make the password more secure
    password_list = list(password)
    random.shuffle(password_list)
    password = ''.join(password_list)

    return password

def send_tender():
    Tender_subscribers = ['yeabsraalebachew9@gmail.com']
    subject = "Test Email from Django"
    message = "This is a test email sent from your Django application."
    from_email = "yeabsiraalebachew@gmail.com"
    recipient_list = ["yeabsraalebachew9@gmail.com"]

    

    try:
        mail_subject = "Fsdfsdfsd"
        for to_email in Tender_subscribers:
            message = "Sdfsdf sdfhsd fsdh"  # Assuming plain text message
            send_mail(subject, message, from_email, recipient_list)
            print(f"tender news sent to {to_email}")
    except Exception as e:
        print("Email Exception ", e)
        return (False, e)

def sendm():
        # Get the subject and message from the form
        subject = "hgdjdgd"
        message = "fgfjgfh ghfg"

        # Set up SMTP settings for Outlook
        smtp_server = "smtp.office365.com"
        port = 587
        username = "yeabsraalebachew@outlook.com"
        password = "1995beyene"
        recipient_list = ['yeabsraalebachew9@gmail.com']

        # Create an EmailMessage object with the necessary information
        email = EmailMessage(
            subject,
            message,
            'yeabsraalebachew@outlook.com', 
            recipient_list,
            
        )

        # Set the SMTP server and port
        server = smtplib.SMTP(smtp_server, port)
        server.starttls()

        try:
            # Log in to your Outlook account using your email address and password
            server.login(username, password)

            # Send the email using the sendmail() method
            server.sendmail(email.from_email, email.to, email.message().as_string())
            message = "Email sent successfully!"

        except Exception as e:
            message = "An error occurred: " + str(e)
            print(message)
            

        finally:
            # Close the connection to the SMTP server
            server.quit()

        

  