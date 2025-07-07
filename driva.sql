-- Purpose: This script is used to setup the valet database and test database.
-- It will drop and recreate the valet and valet_test databases, and then execute the schema and seed files.

\set ON_ERROR_STOP on
\echo Starting database setup...

-- Drop and recreate valet db
DROP DATABASE IF EXISTS driva WITH (FORCE);
CREATE DATABASE driva;
\c driva


-- Execute schema and seed files
\echo Executing driva-schema...
\i driva-schema.sql

\echo Executing driva-seed...
\i driva-seed.sql


\echo Starting test database setup...

-- Drop and recreate driva_test db
DROP DATABASE IF EXISTS driva_test WITH(FORCE);
CREATE DATABASE driva_test;
\c driva_test

-- Execute schema file for test database
\echo Executing driva-test-schema...
\i driva-schema.sql
\echo Executing driva-test-seed...
\i driva-seed.sql

\echo Setup complete!