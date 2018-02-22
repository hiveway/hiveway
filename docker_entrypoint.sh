#!/bin/sh

### 1. Adds local user (UID and GID are provided from environment variables).
### 2. Updates permissions, except for ./public/system (should be chown on previous installations).
### 3. Executes the command as that user.

echo "Creating etherhive user (UID : ${UID} and GID : ${GID})..."
addgroup -g ${GID} etherhive && adduser -h /etherhive -s /bin/sh -D -G etherhive -u ${UID} etherhive

echo "Updating permissions..."
find /etherhive -path /etherhive/public/system -prune -o -not -user etherhive -not -group etherhive -print0 | xargs -0 chown -f etherhive:etherhive

echo "Executing process..."
exec su-exec etherhive:etherhive /sbin/tini -- "$@"
