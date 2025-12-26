```mermaid
flowchart TD

start@{shape: circ}
init@{shape: lean-r, label: "input: 
let IS_FEATURE_ACTIVE = #quot;#quot;
let num = 100"}

swT@{shape: diamond, label: "true"}
swF@{shape: diamond, label: "false"}
caseT@{shape: lean-r, label: "output: #quot;Hello#quot;"}
caseF@{shape: lean-r, label: "output: #quot;Hi#quot;"}
default@{}
if@{shape: diamond, label: "num === 100"}
ifT@{shape: lean-r, label: "output: num"}
else@{shape: lean-r, label: "output: #quot;Bonjour!#quot;"}
lanjutan@{shape: lean-r, label: "output: #quot;Lanjutan#quot;"}
selesai@{shape: dbl-circ}

start-->init
init-->swT-->caseT
swT-->|false| swF
swF-->caseF
swF-->|false| default

default-->if
if-->ifT
if-->else
caseT-->lanjutan
caseF-->lanjutan
ifT-->|true| lanjutan
else-->lanjutan
lanjutan-->selesai
```