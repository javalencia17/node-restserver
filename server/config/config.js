
//==========================
// Puerto
//==========================

process.env.PORT = process.env.PORT || 8080;

//==========================
// Vencimiento del token
//==========================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//==========================
// Seed de autentificacion
//==========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//==========================
// Google client ID
//==========================

process.env.CLIENT_ID = process.env.CLIENT_ID || '763288206366-kei695arhkntf5sngodgsoojtjsn6s26.apps.googleusercontent.com'; 

