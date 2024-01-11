# ed25519

To install dependencies:

```bash
bun install
```

To run:

```bash
bunx tealscript src/*.algo.ts dist

goal app method \
    --create \
    --from $ADDRESS \
    --method "createApplication()void" \
    --approval-prog dist/Demo.approval.teal \
    --clear-prog dist/Demo.clear.teal

goal app method \
    --app-id $APPID \
    --from $ADDRESS \
    --method "verify(byte[],byte[64],byte[32])bool" \
    --arg '"TWVzc2FnZSBmb3IgRWQyNTUxOSBzaWduaW5n"' \
    --arg '[109,211,85,102,127,174,78,180,60,110,10,185,46,135,14,219,45,224,168,140,174,18,219,216,89,21,7,245,132,254,73,18,186,191,244,151,241,184,237,249,86,125,36,131,213,77,220,100,89,190,167,133,82,129,183,162,70,166,9,227,0,26,78,8]' \
    --arg '[183,163,193,45,192,200,199,72,171,7,82,91,112,17,34,184,139,215,143,96,12,118,52,45,39,242,94,95,146,68,76,222]' \
    --fee 4000
```

This project was created using `bun init` in bun v1.0.22. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
