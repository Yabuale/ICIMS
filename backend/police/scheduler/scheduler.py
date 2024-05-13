from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import DjangoJobStore,register_events
from django.core.management import call_command

def db_backup():
    try:
        call_command('dbbackup')
    except:
        pass
def start():
    scheduler = BackgroundScheduler()
    scheduler.add_jobstore(DjangoJobStore(), "default")
    scheduler.add_job(db_backup, 'interval', minutes=20,jobstore='default',id="weekly_backup",replace_existing=True)
    register_events(scheduler)
    scheduler.start()