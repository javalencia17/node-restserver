
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

