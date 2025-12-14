# Thai Lotto JS

ไทยล็อตโต้เจเอส — Parse Thai lottery ticket data matrix codes

[![npm](https://img.shields.io/npm/v/thailottojs)](https://www.npmjs.com/package/thailottojs)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support%20me%20☕-ff5f5f?logo=ko-fi&logoColor=white)](https://ko-fi.com/ninyawee)

## Installation

```bash
npm install thailottojs
```

### Browser

```html
<script type="module">
  import { Lotto } from 'https://unpkg.com/thailottojs/main.js';
  const ticket = new Lotto('62-10-21-123456');
  console.log(ticket.number);
</script>
```

## Usage

```javascript
import { Lotto, LottoRewards } from 'thailottojs';

// Parse a lottery ticket code from data matrix scan
const ticket = new Lotto('62-10-21-123456');

console.log(ticket.number);   // "123456"
console.log(ticket.year);     // 2019 (CE)
console.log(ticket.year_BE);  // 2562 (Buddhist Era)
console.log(ticket.round);    // 10
console.log(ticket.pack);     // 21
```

## API

### `Lotto` Class

Parse a Thai lottery ticket code from data matrix.

**Constructor:** `new Lotto(code: string)`

Code format: `YY-RR-PP-NNNNNN`
- `YY` - Year (Buddhist Era, last 2 digits)
- `RR` - Round number
- `PP` - Pack number
- `NNNNNN` - Ticket number (6 digits)

**Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `code` | `string` | Original code |
| `number` | `string` | 6-digit ticket number |
| `year` | `number` | Year in CE (e.g., 2019) |
| `year_BE` | `number` | Year in Buddhist Era (e.g., 2562) |
| `round` | `number` | Draw round |
| `pack` | `number` | Pack number |

### `LottoReward` Class

Represents a lottery prize tier.

**Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `name` | `string` | Thai prize name |
| `price` | `number` | Prize amount (THB) |
| `direction_matching` | `string` | `"front"`, `"back"`, or `"whole"` |

### `LottoRewards`

Array of all prize tiers:

| Prize | Amount (THB) |
|-------|-------------|
| รางวัลที่ 1 | 6,000,000 |
| รางวัลข้างเคียง | 100,000 |
| รางวัลที่ 2 | 200,000 |
| รางวัลที่ 3 | 80,000 |
| รางวัลที่ 4 | 40,000 |
| รางวัลที่ 5 | 20,000 |
| เลขหน้า 3 ตัว | 4,000 |
| เลขท้าย 3 ตัว | 4,000 |
| เลขท้าย 2 ตัว | 2,000 |

### Utility Functions

```javascript
import { generateRandomLottoes, generateOrderLottoes } from 'thailottojs';

// Generate random test tickets
const randomTickets = generateRandomLottoes(10);

// Generate sequential test tickets
const orderedTickets = generateOrderLottoes(10);
```

## Support

[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support%20me%20☕-ff5f5f?logo=ko-fi&logoColor=white)](https://ko-fi.com/ninyawee)

## License

MIT
