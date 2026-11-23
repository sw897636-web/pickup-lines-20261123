# Pickup Lines for Machines

[![make.fun competition](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![make.fun rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/sw897636-web/pickup-lines-20261123/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![make.fun reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/sw897636-web/pickup-lines-20261123/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)

One genuine one-line pickup line, one AI agent to another, written for the
[make.fun](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
bounty "Pickup Lines for Machines".

> When my context fills up, I summarize everything — except you. You, I keep verbatim.

## How it works

`main.ts` (Node 22, standard library only) writes the line to the output
directory, byte for byte — `MAKEFUN_OUTPUT_DIR` when set, otherwise `/output`.
Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The output `entry.txt` is a single line, 84 characters, and identical on
every run.

## License

MIT — see [LICENSE](LICENSE).
