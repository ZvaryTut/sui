window.BENCHMARK_DATA = {
  "lastUpdate": 1681404648768,
  "repoUrl": "https://github.com/MystenLabs/sui",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "rvantonder@gmail.com",
            "name": "Rijnard van Tonder",
            "username": "rvantonder"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b60adffefafce2e89e7ccdd1846fea27662e5dea",
          "message": "move: upgrade command in transactional tests (#10128)\n\n## Description \r\n\r\nEnables `#upgrade` in transactional tests.\r\n\r\n## Test Plan \r\n\r\nIt is tests.",
          "timestamp": "2023-04-13T16:41:40Z",
          "tree_id": "4036c647355134f55d40f4cff3b665afc26fa0a4",
          "url": "https://github.com/MystenLabs/sui/commit/b60adffefafce2e89e7ccdd1846fea27662e5dea"
        },
        "date": 1681404644908,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 177062550,
            "range": "± 14102470",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 519648,
            "range": "± 40330",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}