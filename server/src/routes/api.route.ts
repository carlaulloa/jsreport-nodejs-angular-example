import { Router } from 'express';
import { ReportController } from '../controller/report.controller';

export function apiRoute(container) {
  const router = Router();
  const reportCtrlRef: ReportController = container().cradle.ReportController;

  router.get('/invoice', reportCtrlRef.getInvoicePDF.bind(reportCtrlRef));

  return router;
}