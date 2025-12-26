# 
```mermaid
flowchart TD
start@{shape: circ}
init@{shape: rect, label: "x=1"}
for@{shape: diamond, label: "i<=10"}
cons@{shape: lean-r, label: "output: x"}
if@{shape: diamond, label: "x==5"}
ifTrue@{shape: rect, label: "x=10"}
ifFalse@{shape: }
forStop@{shape: dbl-circ, label: "Stop"}


start-->init-->for-->cons-->if
if-->|true| ifTrue 
if-->|false| ifFalse --> for
for-->|false| forStop

ifTrue-->update-->for
```