# Infrastructure

 - Load Balancing
   - https://blog.gcp.expert/gcp-http-load-balancer-console/
   - https://blog.gcp.expert/gcp-instance-autoscaling/
   - for ShareDB - use Redis Pub/Sub across instances
     - https://github.com/share/sharedb/issues/110
     - https://github.com/share/sharedb/issues/295
     - https://stackoverfow.com/questions/20375338/
     - https://github.com/share/sharedb-redis-pubsub
   - nginx can help: https://www.digitalocean.com/community/tutorials/understanding-nginx-http-proxying-load-balancing-buffering-and-caching
 - Stateless Web Server
   - OpenAPI
     - https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md
     - https://github.com/wesleytodd/express-openapi/
 - SQL Server / Shading
 - Docker / Kubernete
   - write file to host - https://stackoverflow.com/questions/31448821
 - static files should be served in a standalone way?

 - Kubernetes, Cloud Run
   - 初看下就是 Cloud Run 幫你省掉一些設定功
   - 不太確定如何使用 cloud run + dockerhub, 但至少使用 google registry 是可以的. 如下例:
     - gcloud builds submit --tag gcr.io/playground-290605/test

## Database

 - database scaling
   - https://cloud.google.com/community/tutorials/horizontally-scale-mysql-database-backend-with-google-cloud-sql-and-proxysql
 - sharding: break large table content into small chunks call shards.
   - https://percona.com/blog/2019/05/24/an-overview-of-sharding-in-postgresql-and-how-it-relates-to-mongodbs/
   - https://blog.yugabyte.com/how-data-sharding-works-in-a-distributed-sql-database/
 - sql proxy
   - https://www.envoyproxy.io/docs/envoy/latest/configuration/listeners/network_filters/postgres_proxy_filter
   - https://medium.com/google-cloud/google-cloud-sql-proxy-with-autoscaling-1f63f1dd4017
 - cluster
   - it seems that "cluster" in postgresql is just a database. yet it can still be "clustered":
     - https://www.opsdash.com/blog/postgresql-cluster.html
     - https://www.opsdash.com/blog/postgresql-streaming-replication-howto.html
     - https://wiki.postgresql.org/wiki/Replication,_Clustering,_and_Connection_Pooling
 - replication
