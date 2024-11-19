import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgresql://postgres.rtafvmyaqjkqsutfcxps:VtfQW1KUn5LXMITU@aws-0-sa-east-1.pooler.supabase.com:6543/postgres')

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize