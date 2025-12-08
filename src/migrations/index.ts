import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20251208_010630_phase1_blocks from './20251208_010630_phase1_blocks';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20251208_010630_phase1_blocks.up,
    down: migration_20251208_010630_phase1_blocks.down,
    name: '20251208_010630_phase1_blocks'
  },
];
