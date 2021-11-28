# Supabase Learnings

Learning Supabase with integrating Nodejs and trying different postgress SQLs commands

## References

1. [Supabase official website](https://app.supabase.io/)
2. [Supabase docs](https://supabase.com/docs)

### Local reproductions

- git clone this repo
- npm install (This will install all the dependencies in package.json)
- create a dotenv file with fields

  1. REACT_APP_SUPABASE_URL (url from supabase project)
  2. REACT_APP_SUPABASE_ANON_KEY (secret key from supabase project)
  3. SERVER_PORT

- start the server (npm run dev)
- you will get the website running in "http://localhost:3000

### Dependencies

1. "@supabase/supabase-js": "^1.28.2"
2. "express": "^4.17.1"
3. "node": "^17.1.0"
4. "nodemon": "^2.0.15"
5. "dotenv": "^10.0.0"
6. "body-parser": "^1.19.0"
