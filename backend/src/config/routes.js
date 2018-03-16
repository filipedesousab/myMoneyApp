const express = require('express');
const BillingCycle = require('../api/billingCycle/billingCycleService');

module.exports = server => {
  // Definir URL base para todas as rotas
  const router = express.Router();
  server.use('/api', router);

  // Rotas de ciclo de pagamento
  BillingCycle.register(router, '/billingCycles');
};
