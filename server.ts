/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import net from 'net';
import { createServer as createViteServer } from 'vite';

// Load environmental parameters
dotenv.config();

const app = express();
const preferredPort = Number(process.env.PORT) || 3000;

// Middleware for parsing requests
app.use(express.json());

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.once('error', () => {
      resolve(false);
    });

    server.once('listening', () => {
      server.close(() => resolve(true));
    });

    server.listen(port, '0.0.0.0');
  });
}

async function findAvailablePort(startPort: number): Promise<number> {
  let port = startPort;

  while (!(await isPortAvailable(port))) {
    port += 1;
  }

  return port;
}

// REST API endpoint: Strategic partnership inquiry submission
app.post('/api/inquiry', async (req, res) => {
  const { name, company, email, opportunityType, message } = req.body;

  // Basic validation check
  if (!name || !email || !opportunityType || !message) {
    return res.status(400).json({
      success: false,
      message: 'All core submission fields (Name, Email, Opportunity Type, Message) are required.'
    });
  }

  console.info('Inquiry received', {
    name,
    company: company || null,
    email,
    opportunityType,
    messageLength: String(message).length,
  });

  return res.json({
    success: true,
    message: 'Inquiry received. Our team will review your submission and follow up directly.'
  });
});

// Configure Vite middleware or production build output pipelines
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    process.env.DISABLE_HMR = 'true';
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
        ws: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log('Vite middleware mounted securely (Development Mode).');
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log(`Static assets served from ${distPath} (Production Mode).`);
  }

  const port = await findAvailablePort(preferredPort);
  if (port !== preferredPort) {
    console.warn(`Port ${preferredPort} is already in use. Using ${port} instead.`);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Shoebox Private Equity Server running on http://localhost:${port}`);
  });
}

startServer();
