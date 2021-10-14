---
slug: /
---

# Markdownスタイリングテスト

Markdownスタイリングテストです。

## 見出しのテスト

# 見出し1

## 見出し2

### 見出し3

#### 見出し4

##### 見出し5

###### 見出し6

## 段落のテスト

✅段落と段落の間には適切な空白があること。

そこで天の神樣方の仰せで、イザナギの命みこと・イザナミの命みこと御二方おふたかたに、「この漂つている國を整えてしつかりと作り固めよ」とて、りつぱな矛ほこをお授けになつて仰せつけられました。

それでこの御二方おふたかたの神樣は天からの階段にお立ちになつて、その矛ほこをさしおろして下の世界をかき廻され、海水を音を立ててかき廻して引きあげられた時に、矛の先から滴したゝる海水が、積つて島となりました。これがオノゴロ島です。その島にお降くだりになつて、大きな柱を立て、大きな御殿ごてんをお建たてになりました。

そこでイザナギの命が、イザナミの女神に「あなたのからだは、どんなふうにできていますか」と、お尋ねになりましたので、「わたくしのからだは、できあがつて、でききらない所が一箇所あります」とお答えになりました。そこでイザナギの命の仰せられるには「わたしのからだは、できあがつて、でき過ぎた所が一箇所ある。

だからわたしのでき過ぎた所をあなたのでききらない所にさして國を生み出そうと思うがどうだろう」と仰せられたので、イザナミの命が「それがいいでしよう」とお答えになりました。そこでイザナギの命が「そんならわたしとあなたが、この太い柱を廻りあつて、結婚をしよう」と仰せられてこのように約束して仰せられるには「あなたは右からお廻りなさい。わたしは左から廻つてあいましよう」と約束してお廻りになる時に、イザナミの命が先に「ほんとうにりつぱな青年ですね」といわれ、その後あとでイザナギの命が「ほんとうに美うつくしいお孃じようさんですね」といわれました。

それぞれ言い終つてから、その女神に「女が先に言つたのはよくない」とおつしやいましたが、しかし結婚をして、これによつて御子みこ水蛭子ひるこをお生うみになりました。この子はアシの船に乘せて流してしまいました。次に淡島あわしまをお生みになりました。これも御子みこの數にははいりません。

## 改行のテスト

✅段落中の改行は、行間を開けすぎないこと。

五月雨を
集めてはやし
最上川

## 単語の強制改行のテスト

✅表示領域を超える単語は表示領域を壊さないよう、単語の途中で改行されること。

aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

## 強調・太字・取り消しのテスト

*強調*は斜体ではなく太めの文字で表示されること。
**太字**はさらに太い文字で表示されること。
~~取り消し~~は取り消し線が文字の上に表示されること。

✅組み合わせられること。

強調+太字: _強調**太字**強調_
太字+強調: **太字*強調*太字**
取り消し+強調: ~~取り消し*強調*取り消し~~
強調+取り消し: _強調~~取り消し~~強調_
取り消し+太字: ~~取り消し**太字**取り消し~~
太字+取り消し: **太字~~取り消し~~太字**

## `<small>`のテスト

✅一回り小さめの文字サイズで表示されること。

`typeof value === 'object' && value !== null`でオブジェクトかどうかを判定します。<small>(ちなみに`null`も`object`になるので2つめのガード条件が必要です)</small>。

## ルビのテスト

<ruby>
漢<rt>かん</rt>
字<rt>じ</rt>
</ruby>

## インラインコードのテスト

✅インラインコード背景色が設定されること。
✅インラインコードは等幅フォントが使われること。

JavaScriptの`boolean`、`number`、`string`はプリミティブ型ですが、オブジェクトのようにメソッドが使えます。

✅強調されたインラインコードは太字で表示されること。

`<em>` → _`code`_
`<strong>` → **`code`**

✅取り消しされたインラインコードはコードの上に取り消し線が表示されること。

`<strike>` → ~~`code`~~

~~JavaScriptの`boolean`はオブジェクトです~~

✅強調された取り消しされたインラインコードは太字で表示され、かつ、取り消し線が表示されること。

`<em>` + `<strike>` → _~~`code`~~_
`<strike>` + `<em>` → ~~_`code`_~~
`<strong>` + `<strike>` → **~~`code`~~**
`<strike>` + `<strong>` → ~~**`code`**~~

## リストのテスト

✅リストはレベルに応じてバレットが変化すること。レベル1 → ●、レベル2→○、レベル3以上→■。
✅レベルに応じてインデントされること。

- あああ
  - AAA
    - ααα
    - βββ
    - γγγ
      - 111
      - 222
      - 333
  - BBB
  - CCC
- いいい
  - AAA
  - BBB
  - CCC
- ううう

✅順序付きリストは`1.`, `2.`, `3.`のように連番になること。

1. あああ
   1. AAA
      1. ααα
      1. βββ
      1. γγγ
         1. 111
         1. 222
         1. 333
   1. BBB
   1. CCC
1. いいい
   1. AAA
   1. BBB
   1. CCC
1. ううう

## 絵文字のテスト

✅絵文字画像は文章の文字の大きさに近いサイズで文中に表示されること。

いいですね:+1:

## リンクのテスト

✅リンクの文字は色付きで表示されること。
✅マウスを乗せると下線が表示されること。

リンク https://google.com を開く。

✅インラインコードの文字は色付きで表示されること。
✅マウスを乗せると下線が表示されること。
リンクコード [`toString`](http://example.com) を開く。

## 区切り線のテスト

✅区切り線が表示されること。

区切り線↓

---

区切り線↑

## テーブルのテスト

✅テーブルの幅は成り行きで表示されること。
✅ヘッダー行は太字で表示されること。
✅奇数行は背景色が設定されること。

| アイテム名 | 値段  |
| ---------- | ----- |
| いぬのえさ | 250円 |
| とりのえさ | 128円 |

✅左寄せ、中央揃え、右寄せで表示されること。

| アイテム名 |     値段     |       備考 |
| ---------- | :----------: | ---------: |
| いぬのえさ |    250円     |     税込み |
| とりのえさ |    128円     |     税込み |
| （左寄せ） | （中央揃え） | （右寄せ） |

## 引用のテスト

✅引用ブロックは左罫線が表示されること。
✅文字色は地の文より薄い色合いが使われること。

> esa.io は「情報を育てる」という視点で作られた、
> 小さな開発チームのためのドキュメント共有サービスです。

✅引用中の見出しの文字色は地の文より薄い色合いが使われること。

> # 見出し1
>
> ## 見出し2
>
> ### 見出し3
>
> #### 見出し4
>
> ##### 見出し5
>
> ###### 見出し6

✅引用中の強調・太字・取り消し線・コード。

> _強調_ > **太字** > ~~取り消し線~~ > `code`

✅引用中のリスト。

> - あああ
> - いいい
> - ううう

> 1. あああ
> 2. いいい
> 3. ううう

## 折りたたみのテスト

<details><summary>詳細</summary>

ここは折りたたまれる

</details>

## タスクリストのテスト

✅バレットは表示されないこと。

- [ ] TODO
  - [ ] TODO
- [x] DONE

## 画像のテスト

✅ROOT直下の画像要素は**左寄せ**になること。

<img width="300" src="https://via.placeholder.com/300" />

✅`<p>`に画像のみを含む場合、その画像要素は**左寄せ**になること。

![](https://via.placeholder.com/300)

✅文章の途中の画像の前後には改行が入らないこと。

Bootstrapを導入すると<img width="81" src="https://img.esa.io/uploads/production/attachments/11666/2020/06/02/18740/1b680917-cf99-4b2a-bb28-afa26cff7775.png" />のようなキレイなボタンがすぐに使えます。

✅横長で表示領域幅を超えるサイズの画像は、表示領域幅に合わせて縮小表示されること。

![](https://via.placeholder.com/2000x100)

✅`<figure>`を使った画像は、**中央揃え**になること。
✅画像のキャプション(`<figcaption>`)は、**中央揃え**になること。

<figure>
    <img width="300"  src="https://via.placeholder.com/300" />
    <figcaption>画像のキャプション</figcaption>
</figure>

✅`<figure>`同士の間には段落間と同じ空白が設けられること。

<figure>
    <img width="100"  src="https://via.placeholder.com/100" />
    <figcaption>画像のキャプション1</figcaption>
</figure>

<figure>
    <img width="100"  src="https://via.placeholder.com/100" />
    <figcaption>画像のキャプション2</figcaption>
</figure>

## コードブロックのテスト

✅等幅フォントで表示されること。

```
シンタックスハイライトのないコードブロックです
```

✅ファイル名がタブ風に表示されること。

```js title="index.js"
...
```

✅シンタクスハイライトが効くこと。
✅コード中のコメントは説明に使われることがあるため、薄すぎず読みやすい文字色になっていること。
✅コードを範囲選択したときに、ハイライトの文字色が維持されること(`::selection`)。

```ts
// Creates a function in global scope called addOldSchool
function addOldSchool(x, y) {
  return x + y;
}

// You can move the name of the function to a variable
// name also
const anonymousOldSchoolFunction = function (x, y) {
  return x + y;
};

// You can also use fat-arrow shorthand for a function
const addFunction = (x, y) => {
  return x + y;
};
```

✅表領域幅を超えるコードブロックにはスクロールがつくこと。

```ts
/**
 * Represents the completion of an asynchronous operation
 */
interface Promise<T> {
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null
  ): Promise<TResult1 | TResult2>;

  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(
    onrejected?:
      | ((reason: any) => TResult | PromiseLike<TResult>)
      | undefined
      | null
  ): Promise<T | TResult>;
}
```

✅`diff-`で始まる場合、差分行がハイライトされること

```diff-js
 const a = 1;
-const b = a + 1;
+const b = a - 1;
```

✅`lineNumbers`を付与すると行番号が表示されること

```js lineNumbers
function main() {
  return undefined;
}
```

✅`diff-`と`lineNumbers`を組み合わせらること。

```diff-js lineNumbers
 const a = 1;
-const b = a + 1;
+const b = a - 1;
```

✅ファイル名、`diff-`、`lineNumbers`を組み合わせらること。

```diff-js:main.js lineNumbers
 const a = 1;
-const b = a + 1;
+const b = a - 1;
```

✅隣り合ったコードブロックは互いの間に空間があること。

```js
console.log(1);
```

```js
console.log(1);
```

## キーボードのテスト

✅`<kbd>`の背景色は黒、文字色は白になること。
✅`<kbd>`は等幅フォントで表示されること。

保存するには<kbd>⌘</kbd> <kbd>S</kbd>を押してください。

## 説明型リストのテスト

✅`<dt>`は太字になること。
✅`<dd>`は1文字程度インデントされること。

<dl>
    <dt>言語名</dt><dd>TypeScript</dd>
    <dt>パラダイム</dt>
    <dd>マルチパラダイム</dd>
    <dd>スクリプト</dd>
    <dd>ジェネリック</dd>
    <dt>登場時期</dt><dd>2012年10月1日</dd>
</dl>

## Footnoteのテスト

✅Footnoteのセクションの前には区切り線が表示されること。[^1]
✅Footnoteには本文より小さめの文字が使われること。[^2]
✅`[2]`のようにカギカッコがつくこと。[^2]

[^1]: Footnoteのセクションの前には区切り線が表示されること。
[^2]: Footnoteには本文より小さめの文字が使われること。
