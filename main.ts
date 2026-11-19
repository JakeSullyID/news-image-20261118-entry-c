/**
 * Publication Script for News Image 2026-11-18 Entry
 * 
 * This program deploys our competition artifact to the designated destination directory.
 * It ships the November 18, 2026 light cream front page featuring forty-four stories.
 * Includes realistic photographic icons and three prominent top image banner sections.
 * Features eleven corrected ALSO news stories aligned with verified date facts.
 * Guarantees that evaluating judges inspect the exact binary stream of our asset.
 */

// Import file system synchronization utilities and path resolution helpers from Node standard libraries.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

// Determine the absolute file system location of the entry image asset
// by resolving its relative path against the current module's URL.
// This ensures robust loading regardless of execution context.
const sourceFile = new URL('./entry.png', import.meta.url);
// Establish the destination directory for our competition output artifact,
// honoring the MAKEFUN_OUTPUT_DIR environment variable when provided
// or falling back safely to the standard default /output directory.
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetFile = join(targetDir, 'entry.png');

// Execute a deterministic binary replication of the source image to the destination path,
// ensuring that identical input bytes consistently produce identical output artifacts across runs.
copyFileSync(sourceFile, targetFile);
