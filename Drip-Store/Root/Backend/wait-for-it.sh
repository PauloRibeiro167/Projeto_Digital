#!/usr/bin/env bash
host="$1"
shift
cmd="$@"

until ping -c1 "$host" &>/dev/null; do
  >&2 echo "Postgres host is unavailable - sleeping"
  sleep 1
done

until nc -z "$host" 5432; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec $cmd