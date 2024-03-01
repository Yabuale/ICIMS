import random
import string
from django.conf import settings
from django.core.mail import EmailMultiAlternatives, send_mail,EmailMessage
import smtplib
from django.template.loader import render_to_string

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



def sendm():
    # Get the subject from the form
    subject = "Subject of the email"
    
    # Set up SMTP settings for Outlook
    smtp_server = "smtp.office365.com"
    port = 587
    username = "yeabsraalebachew@outlook.com"
    password = "1995beyene"  
    recipient_list = ['naolkuma02@gmail.com']

    # Load HTML template
    html_message = render_to_string('email.html', {'variable': 'value'})  

   
    email = EmailMultiAlternatives(
        subject,
        "Text content of the email",  
        'yeabsraalebachew@outlook.com',
        recipient_list,
    )

    
    email.attach_alternative(html_message, "text/html")

    
    server = smtplib.SMTP(smtp_server, port)
    server.starttls()

    try:
       
        server.login(username, password)

        #
        server.sendmail(email.from_email, email.to, email.message().as_string())
        message = "Email sent successfully!"

    except Exception as e:
        message = "An error occurred: " + str(e)
        print(message)

    finally:
        
        server.quit()





        

  