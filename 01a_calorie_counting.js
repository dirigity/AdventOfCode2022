

function main(input) {
    let res = input.split("\n\n").map((calories) => calories.split("\n").reduce((sum, curr) => sum + Number.parseInt(curr), 0)).reduce((max, curr) => Math.max(max, curr), 0);
    console.log(res);
}

let input = `5800
2273
1315
5801
6352
2649
4140
2115
5298
4441
4428
3773
1076

8063
10386
5705
8397
1084
7661

3661
5756
3231
5162
4930
4675
1113
6795
6415
1144
2900
5147
2966

35187

12434
2038
12435
8757
6976
4532

4642
4431
5126
4672
1724
3012

3801
6564
5401
3913
3090
1484
6227
1283
2501
4601
5860
7036

19257
31867

4292
4518
1298
13147
7463

6784
1065
4015
3154
6429
5067
6535
5731
1270
5870
4934
2800

5227
6294
6733
5177
2773
6553
3219
1446
7005
6036
6872

1721
4408
5577
2799
2257
3149
2389
3713
5588
2324
4595
6018
4926

1233
4799
3380
1975
1924
1578
2338
1546
3708
4020
5872
2519
5334
4416

18103
1692
10497
6786

4837
12315
6510
9221
10023
5698

9781
18818
19784
5100

7596
14668
18708

1932
18024
6361

7302
5163
9039
4774
8726
6538
2054
7238
4233

3375
6049
4925
7129
6075
1262
3836
5878
3292
1316
3924
3530

8653
21172
18837

8052
1672
2962
3270
8160
3033
2004
7774
8182
3047

7917
2458
1040
7210
7742
4296
2861
9324
5721

17851
11236
7107

6962
4498
10042
4539
10759
8378
5781

7156
10063
5329
2449
4749
6498
6493
1924

2161
1309
1770
3195
1581
1194
1455
1350
5298
5290
1872
2155
3060
1514
1872

9664
14392
10201
12693
8817

4960
2281
6321
4953
1439
1372
5253
2338
2516
6332
2760
6702
2354

1341
1489
7110
2267
6809
4198
1137
2526
2087
3885
4952
3056

6561
1313
6624

11571
3452
15300
1518
14811

3421
5270
1676
6712
6231
6617
6775
5428
3497
5598
3723

7879
7984
2678
5770
4217
5323
3708
2799
5466

2895
3934
4468
6864
4531
5622
3281
6518
4313
5273
3945
5378
2585

3486
6101
1036
1079
3380
4542
3617
4279
2397
2172
3711
6251
1219
6320

6785
4840
4314
3647
4660
5968
1932
3144
2131
6556
5107
2018
4441

2958
2812
1812
4047
4055
11311
7254

2563
1559
6369
4595
3617
1979
1988
1648
2520
5216
6227
6239
6469
3824

4417
5913
2444
6808
4742
2422
5153
6707
6968
6663
2355

9949
19801
14001
15160

1166
12942
15632
3266
16053

7820
7480
1377
4492
5371
1411
2455
8883

17669
8092

8706
7270
2362
3278
7920
6014
2647
1328
6135
4121

1300
5806
9993
5891
1588
11239
10363

6375
2494
2291
5069
2878
4995
3716
7152
2761

6224
1559
2918
8131
7509
5718
3661
3544
1823
7656

16526
11469
1419

53687

2857
2808
4648
8455
9957
3914

7762
5994
6047
8806
5176
7275
4551
4066

5763
3134
1326
1673
1473
3568
3500
3148
6480
6968
5409

3964
30423

4429
15272
5536
17259

12059
2888
23495

6809
1963
3840
3427
4613
3621
6088
1689
7164
1066
2414
1709

3278
10853
4541
8619
8481
5872

12075
14580

7950
6716
2477
3646
5451
4247
5960
1059
1421
5363
2927

6077
3404
5644
3187
8654
2732
6190
2191
3446

13528
10960
12280

35272
23802

2178
2098
2920
4938
6504
1060
4419
4813
5278
2795
3169
3632
2780
5275

4649
1930
1983
3098
4015
2875
2805
5216
3560
5647
2568
5779
6049

27045
16939

10445
10797
10108
2466
2246
5724
7331

4442
7590
1569
7171
2642
2514
3817
9721

8791
7994
2284
2030
8332
6368
4957
7785
1048
4729

9724
7501
5505
9879
9365
9333
4116
8176

9566
3327
7777
11637
2558

33212

3528
6544
1465
6135
6022
2179
5929
3589
5116

1295
20019
23243

10512
14094
8100
10837
1990

8004
5887
5776
3619
5955
1823
3549
1608
5574
2536

21105

1121
3374
6887
7477
1559
8129
2568
2267
4276
5654

13156
11437
2579
13990
4857

4870
5826
5900
2870
4855
5032
4549
3334
4392
6687
1419
2931
5741

3388
1796
3472
1643
1332
2683
4063
3896
5532
4179
3293
2287

3917
4479
4607
3161
1568
5766
1114
5629
4985
4126
6032
5801
4563
4102
5414

1680
7168
4035
7272
1069
5464
3362
8014
6102
3438

12897
4134
5080
5112
1382
8072

6459
1052
7860
6344
11275
7862

7127
5350
4677
6080
7389
6254
1762
3744

2309
9952
1649
3813
10728
9047
10324
7166

10873
3572
12788
4164

4454
4712
3474
2168
5914
2979
4481
3906
1923
3666
1563
4974
2768
3148
4075

8824
14894
10182

27925
27484

10626
19944
5603
2536

6931
14574
6857
2887
4086

18693
15550
9475
16434

6759
6343
4255
3838
6209
3314
2508
3168
4738
4613
1326
5034
1437

1822
10438
9137
7846
8451
9397
7729

2326
3628
5120
2662
3814
3761
1462
1878
6003
2927
1345
2849
6064
5540
2435

3680
3813
4824
5499
9998
2233
9012

30259
24718

10326
6960
7198
14566
13123

6018
6875
5608
1167
6331
5020
3796
4878
6180
2043
2419

6676
7795
6677

3188
4992
3958
1837
3146
4012
2109
4262
6831
2423
1716
5367

5837
1616
6477
5255
1808
5473
5978
5139
4689
5701
3022
2911
5043

9217
16226

1105
6108
3893
5617
1700
4762
2230
4590
6602
5875
4648
2742
1623

7941
5740
6709
4488
7148
6554
4125
5040
8310
5795

4126
2456
6279
2323
4295
2384
5372
4833
3379
4984
3094
3085

4134
7845
5029
9865
8431
7084
4411
7765

9573
10031
11504
18955

65758

10933
23224
9234

9163
8764
4788
8189
11424
1888

7361
7393
11150
11767
10104
11200
5473

1033
5952
4635
3781
5088
3479
4403
6264
2437
1437
6677

15877
15511
7676
11138
14878

3345
2250
4913
5217
1510
4379
4549
1731
4827
2068
2835
5467
1749

4448
3042
5305
1516
4014
1408
6255
1208
6206
3580
6247
1620

2712
10639
6856
8948
1911
1404

9349
18213

2373
6003
5216
2901
8754
2517
4093
2475
5071
3175

5235
1935
7751
12132
1739
8963
1855

3890
4106
3949
4795
2816
1100
1278
2287
2066
5351
4113
4714
4410
2178

3575
5434
8010
4677
4524
7438
7363
2150
8133
2840

3184
4657
5941
4474
4399
5675
5088
2875
5175
1441
2924
5509
6037
1228
3596

10076
14846
19534
16135

3832
5882
5111
2141
1925
4174
2729
5974
1425
4740
2013
5110
5262
3245
2533

5321
5818
2415
6348
5720
1424
2960
6265
1630
5768
5328
2655
6323
6363

6956
5122
15372
14713
7784

32625
11125

5349
3235
5669
6210
5007
5300
2283
2824
5185
6222
5394
4139
1300
1677

6416
8235
5091
7099
8016
5993
5297
4554
1919

7685
8321
8192
8798
3673
5084
8042
7700
9121

16486
10677

9499
5512
13379
13851
12439

4919
9292
5319
5220
8546
2005
6429
5510

1977
1671
2792
6173
3483
1069
1892
4190
6263
6184
3514
5813

3784
6795
1693
2493
5963
3511
6278
2558
4924
1523
5279

2053
1812
1696
1917
6417
6031
7956
7385
2764

4899
2174
15256
8489
4745

4366
2569
8990
4173
8144
6488
1033

7989
8202
3781
1358
6093
8358
4047
4562
4289

5660
8763
7099
12118
4652
6537

5511
1780
4502
4999
1990
2554
3552
3589
1418
1354
4151
5500
1057
5282

5675
1099
4235
3506
3293
4472
3878
5262
3734
5692
4205
3469
2879

2747
2909
2608
2324
1421
2801
1022
4630
2335
5494
2780
3638

4808
5061
4974
2064
4797
5901
4819
6736
5356
4876
6530
6011
4317

3044
2230
2371
4651
3437
4759
4145
1845
1327
4512
6172
3741
2817
4810

3319
5963
5235
2536
6866
4904
3523
4587
4877
6773
2652
2462
3030

3231
7432
6805
5632
1398
5278
6545
2076
4940
2754

2990
7260
4550
2885
8785
5737
3501
2019
8647

4493
8668
5035
9120
9324
2968
2428

6289
3485
2200
3382
5783
6146
3018
4079
4596
1116
3919
2760
2861

7625
12909
13695
7903
4340

4798
4783
6796
6200
5999
6061
3060
3896
7634
7644
1794

8485
10545
13132
5653
13306
8014

5758
3284
6741
2987
3970
4669
4410
5673
5765
6895
1887
4852
4019

4657
8052
6669
3467
8919
2273
1255

6289
6824
6157
5043
4502
5268
3889
2896
1904
5278
1395
4423
3589

4372

49650

3641
1463
2529
2741
2626
1104
6111
4427
6694
6265
2993
3122
1431

1098
4751
3778
1188
2895
1855
5950
1761
2264
2581
5002
2820
2688
4309
5021

5561
4720
8271
2578
5086
5081
9935

5993
5237
4986
2470
4081
2107
5118
1436
2722
3317
5135
1687
6081
2281

2848
10385
11585
8479
7000

9106
3499
14806
14856
14270

10741
4152
1465
2692
6622
7357
4795
9761

8661
15426
4510
16351
9036

2728
5277
6437
3607
4858
5174
5124
6278
4115
3943
2548
4946
5169
4707

61072

9226
2700
4012
8201
9552
3895
8835
2748
9567

10717
1581
10024
6404

5376
1151
3132
5017
5373
4282
3484
5596
4456
6121
2714
6212

27894
35903

4917
8413
2371
5101
6183
2951
2248
8656
9266

2625
6275
7478
4337
1541
1213
3955
4757
8046
7255
1971

2777
2409
2353
5879
5503
4098
2158
3969
1368
4135
1226
1285
4840
2038
1757

8863
9589
3253
5275
7203
7360
9066
8794

1470
7260
2185
3035
5968
7504
8342
5621

10611
7460
3736
4146
10173
12291

3680
12376
13226
1889

3439
7329
3377
6639
6283
2887
2653
3499
3625
6361
3250
6882

7470
4047
1714
6357
5267
7577
3495
6565
2349
3850
1759

8099
8009
19118
14120

2826
7174
2774
2989
7176
7625
3899
4002
4849

7983
10730
2709
4285
12607
7955

13822

1234
4277
2621
2723
6879
4385
2232
5996
5136
3369
7149
2219

66306

5829
6255
4929
8250
3516

4857
6895
4273
7081
2989
5846
2961
7846
2255
4802
1670

8191
1267
6985
4747

6734
4762
1304
7783

7646
1419
3729
7973
3350
5737
3883
1428
5432
4835

13785
12814
5626
11147
5700
9402

3500
9350
11011
8174
9828
6832
1068

40289

5599
4191
3625
8604
1087
6751
6020
7519
7000
1554

31342

6840
2096
2482
8269
3005
6414
3823
6976
9302

7401
2825
6693
3785
3653
1608
5157

3109
1332
3032
6908
2446
6437
1527
2876
3124
5905
3888
1027
2056

13859
19777

2156
5880
5299
8558
1170
8369
2384
4922
3540
4069

2520
8578
6988
4589
2808
8622
7274
1485
3425
2048

1975
7298
4361
2127
5352
6143
5553
6939
1970
4892
1193
2763

2681
5649
3986
3879
1710
1749
5178
5919
6788
2577
7406

6714
1132
4707
8859
9325
7255
7746
7393

4925
2772
6414
2083
5913
6499
1838
5955
2627
3507
3485
1041
2445
2860

5739
1228
3578
7053
1333
7932
2778
1264
3221
4462

1702
1263
24430

6711
14533
14161
3384
1798

6650
8334
2502
6261
3300
8793
3729
2148
7511
4702

5263
2653
2646
10475
5210

6124
9121
12762
5131
15866

20098
17049
6082
12356

4615
11397
6506
16351

2167
3926
4256
5477
5085
1270
4992
2015
3316
3057
6018
2026
4406
2973
4209

21818
5205

9308
4553
4209
2899
5831
11175

2175
5686
3649
4884
2654
6049
3099
5191
5017
5553
3016
2743
2211
5615
2750

5895
5859
2391
1786
1219
4664
4385
3571
6747

21656
6158

2384
4885
4143
2965
5009
1963
2434
3975
4187
6320
2693
2514
5190
1337

3558
13277
5659
12432
6800
1444

5684
3966
3790
5530
1018
5860
1260
2663
3382
1699
3573
5785
4221
3293
2612

6842
7855
10358
7499
4828
9999
6736
10306

4733
7411
2214
3289
8075
4328
5529
1376
6701
3311
1550

10753
2816
5490
9546
9574
8698
9240

35760

11913
9817
5260
11404
14859

8190
3694
7646
9332
3588
8608
3521
5167
2193

4743
4120
1931
3477
3687
2453
2666
7001
1895
4923
3035
2630

4468
2828
13485
3277
3154
11675

7051
2700
9410
6504
6826
10176

9119
1701
10677
7991
2200
8689
2906
4077

37282
7225

1662
5592
4997
5548
3677
4294
2937
1170
5407
2368
3726
6589
6229

12729
13674
10641
6837
6046
1022

5812
5667
1796
6701
3055
3362
6757
3056
1043
4129
4237
3907
4784

8330
5270
4031
9506
9062
2762
5838
7955

5869
1162
3744
3349
5621
7359
4782
1259
3904
3692
3836
5684

1077
1738
1787
4504
5669
5257
2325
2813
4297
1652
4500
5801
4297
2362
1616

6720
2446
4444
4132
4665
2280
4203
6500
6941
6667
1867

3560
3111
5179
1352
6779
11684
2498

6316
1792
4065
3358
4597
5573
3097
1235
4623
2981
6725
1251

2218
4275
5627
2334
2954
4955
2480
2248
1305
3325
2974
2971
1400
5745
5606

5511
5981
1117
4137
5442
3205
1798
3667
4508
2507
3980
5785
2912
5664
2775`

if (false)
    input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

main(input);