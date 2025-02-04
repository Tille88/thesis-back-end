// TODO: remove unused parts
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const healthRouter = require('./routes/healthRoutes');
const respondentRouter = require('./routes/respondentRoutes');
const responseRouter = require('./routes/responseRoutes');
const acceptanceRouter = require('./routes/acceptanceRoutes');

// Start express app
const app = express();

app.enable('trust proxy');

// 1) GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors());
// Access-Control-Allow-Origin *
// TODO: Static website location only
// app.use(cors({
//   origin: 'https://www.TODO.com'
// }))

app.options('*', cors());
// TODO: NEEDS CHANGING OR ALL ROUTES?
// app.options('/api/v1/TODO...', cors());

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

app.use(compression());


// 3) ROUTES
app.use('/api/v1/health', healthRouter);
app.use('/api/v1/respondent', respondentRouter);
app.use('/api/v1/response', responseRouter);
app.use('/api/v1/acceptance', acceptanceRouter);


app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
