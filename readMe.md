# Algoritma Javascript 1

## Task 1
#### Flowchart
```mermaid
flowchart TD

mulai@{shape: circ, label: "start"}
selesai@{shape: dbl-circ}
inputR@{shape: lean-r, label: "input: r"}
proses@{shape: rect, label: "phi = 22/7
hitungLuas = phi * r * r
hitungKeliling = 2 * phi * r"}
outputLuas@{shape: lean-r, label: "output: #quot;Luas lingkaran = #quot; + hitungLuas"}
outputKel@{shape: lean-r, label: "output: #quot;Keliling lingkaran = #quot; + hitungKeliling"}

mulai-->inputR-->proses-->outputLuas
outputLuas-->outputKel-->selesai
```