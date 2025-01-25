
const { Pool} =require("pg")

const pool = new Pool({
    connectionString: "postgresql://postgres:guru@db.mlnjadqkzznoqqbtsccu.supabase.co:5432/postgres"
});

module.exports=pool


// postgresql://postgres:guru@db.mlnjadqkzznoqqbtsccu.supabase.co:5432/postgres