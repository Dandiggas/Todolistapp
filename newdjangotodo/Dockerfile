FROM python:3.8-alpine

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /app/newdjangotodo

COPY ./newdjangotodo/requirements.txt /app/newdjangotodo/

# Build psycopg2-binary from source -- add required required dependencies
RUN apk add --virtual .build-deps --no-cache postgresql-dev gcc python3-dev musl-dev && \
        pip install --no-cache-dir -r requirements.txt && \
        apk --purge del .build-deps

COPY ./newdjangotodo/ /app/newdjangotodo/


CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]
