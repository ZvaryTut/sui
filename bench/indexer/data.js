window.BENCHMARK_DATA = {
  "lastUpdate": 1681405432487,
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
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02b64f08abd5bdf48b08f512bea34f38a325e745",
          "message": "[bugfix] - balance changes generation should not ignore missing objects as old object can be pruned in FN (#10657)\n\n## Description \r\n\r\nfullnode can return incorrect balance changes for historic transaction\r\nbecause of pruning, the balance changes generation logic incorrectly\r\nignore missing object, this PR fixes that and will return error when a\r\nobject needed for balance change generation is not available.\r\n\r\n---------\r\n\r\nCo-authored-by: healthydeve <jian@mystenlabs.com>",
          "timestamp": "2023-04-13T17:53:53+01:00",
          "tree_id": "54f9b9a957ba7b86f6e7af6968887eedaf37136c",
          "url": "https://github.com/MystenLabs/sui/commit/02b64f08abd5bdf48b08f512bea34f38a325e745"
        },
        "date": 1681405428605,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 193101857,
            "range": "± 12375225",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 545476,
            "range": "± 38538",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}