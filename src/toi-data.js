// src/toi-data.js

export const templates = [
  // 因果テンプレ
"{subject}は、なぜ{verb}のか？",
"{concept}は、なぜ{verb}のか？",
"{concept2}は、なぜ{verb}のか？",
"{concept}は、なぜ{object}に縛られるのか？",
"{concept}は、なぜ{concept}に縛られるのか？",
"{concept2}は、なぜ{concept}に縛られるのか？",
"{subject}の{concept}は、なぜ{object}に縛られるのか？",
"{subject}によって、なぜ「{concept}」が起こるのか？",
"{subject}の{concept}は、なぜ「{object}」的意味が発生するのか？",
"なぜ{subject}は、{concept2}に起因するのか？",
"なぜ{concept}は、{concept2}に起因するのか？",
"なぜ「{passive}」は、「{concept}」に起因するのか？",
"なぜ「{passive}」は、「{concept2}」に起因するのか？",
"なぜ「{verb}」は、「{passive}」に起因するのか？",
"「{subject}の{concept}」は、なぜ「{object}」によって制限されるのか？",
"「{subject}の{concept2}」は、なぜ「{object}」によって制限されるのか？",
"「{subject}の「{verb}」は、なぜ「{concept}」によって制限されるのか？",
"{subject}は、「{concept}」によってどうなるか？",
"{concept}は、「{subject}」によってどうなるか？",
"{object}は、「{subject}」によってどうなるか？",
"{concept}は、「{object}」によってどうなるか？",
"{subject}は。{concept}によって証明されるか？",
"{concept2}は、{concept}によって証明されるか？",
"{object}は、{concept}によって証明されるか？",
"{object}は、{subject}によって証明されるか？",
"{subject}を{verb}とき、何が生まれるのか？",
"{object}を{verb}とき、何が生まれるのか？",
"{concept}を{verb}とき、何が生まれるのか？",
"{concept2}を{verb}とき、何が生まれるのか？",
"なぜ{subject}が「{verb}」のか？",
"なぜ{object}が「{verb}」のか？",
"なぜ{object}が「{concept}」なのか？",
"なぜ{object}は、{subject}によって変化するのか？",
"なぜ{subject}は、{object}によって変化するのか？",
"なぜ{subject}は、{concept}によって変化するのか？",
"なぜ{object}は、{concept}によって変化するのか？",
"{concept}が{object}を変える理由は？",
"{object}が{concept}を変える理由は？",
"{subject}が{concept}を変える理由は？",
"{concept}が{subject}を変える理由は？",
"{concept}が{concept}を変える理由は？",
"{subject}と{object}の関係には、何があるのか？",
"{object}と{subject}の関係には、何があるのか？",
"{concept}と{concept2}の関係には、何があるのか？",
"{concept}と{subject}の関係には、何があるのか？",
"{concept}と{object}の関係には、何があるのか？",
    // 因果テンプレ
    // 構造テンプレ
"{subject}と{concept2}の間には、何が潜んでいるのか？",
"{concept}と{concept2}の間には、何が潜んでいるのか？",
"{subject}と{concept2}との{concept}は、「{concept}」である",
"{concept}は「{concept}」であるか？",
"{concept}は「{object}」であるか？",
"{concept}は「{place}」であるか？",
"なぜ{concept}は「{concept}」の下部構造であるのか？",
"なぜ{concept}は「{object}」の下部構造であるのか？",
"なぜ{concept}は「{place}」の下部構造であるのか？",
"なぜ{concept}は「{concept}」の上部構造であるのか？",
"なぜ{concept}は「{object}」の上部構造であるのか？",
"なぜ{concept}は「{place}」の上部構造であるのか？",
"なぜ{concept}は「{concept}」の外部であるのか？",
"なぜ{concept}は「{object}」の外部であるのか？",
"なぜ{concept}は「{place}」の外部であるのか？",
"なぜ{concept}は「{concept}」を支えているのか？",
"なぜ{concept}は「{object}」を支えているのか？",
"なぜ{concept}は「{place}」を支えているのか？",
"なぜ{concept}は「{concept}」の侵入を防いでいるのか？",
"なぜ{concept}は「{concept}」の侵入を防いでいるのか？",
"なぜ{concept}は「{concept}」の侵入を防いでいるのか？",
"{place}に{object}が現れると、{concept}はどう変化するか？",
"{tool}で{place}を測ると、どのような数値になるのか？",
"{subject}で{concept}を測ることとは？",
"{object}で{concept}を測ることとは？",
"{subject}が{verb}「{place}」とは？",
"{subject}が{passive}「{place}」とは？",
"{object}が{verb}「{place}」とは？",
"{object}が{passive}「{place}」とは？",
"{concept}は「{concept}」を内包するか？",
"{concept}は「{object}」を内包するか？",
"{concept}は「{place}」を内包するか？",
"{subject}の構造を反転させると何が見えるか？",
"{concept}の構造を反転させると何が見えるか？",
"{object}の構造を反転させると何が見えるか？",
"{subject}はどのように分割できるか？",
"{object}はどのように分割できるか？",
"{concept}はどのように分割できるか？",
"{concept}は{concept}によってどのように分割できるか？",
"{concept}は{object}によってどのように分割できるか？",
"{concept}は{subject}によってどのように分割できるか？",
"{object}は{concept}によってどのように分割できるか？",
"{subject}は{concept}によってどのように分割できるか？",
"{object}の対称性とは何か？",
"{concept}の対称性とは何か？",
"{concept2}の対称性とは何か？",
    // 構造テンプレ
    // 存在テンプレ
"{concept}はどこからやってくるのか？",
"「{subject}の{concept}」はどのように現れるのか？",
"「{concept}の{subject}」はどのように現れるのか？",
"「{concept}の{tool}」はどのように現れるのか？",
"利用できない「{tool}」の存在とはどのようなものか？",
"利用できない「{object}」の存在とはどのようなものか？",
"{subject}の対称性とは何か？",
"{subject}は「{place}」に溶けることができるか？",
"{concept}は「{body}」に触れるのか？",
"{body}で感じる「{concept}」とはどんなものか？",
"「{place}」が{verb}とは？",
"「{subject}」が{verb}とは？",
"「{body}」が{passive}とき、何を生じるか？",
"「{tool}」が{passive}とき、何を生じるか？",
"「{verb}{subject}」の本質は？",
"「{passive}{subject}」の本質は？",
"「{verb}{tool}」の本質は？",
"「{passive}{tool}」の本質は？",
"「{verb}{body}」の本質は？",
"「{passive}{body}」の本質は？",
"なぜ「{subject}」は{body}であるのか？",
"なぜ「{verb}」は{object}であるのか？",
"なぜ「{verb}」は{tool}であるのか？",
"なぜ「{concept}」は{concept}であるのか？",
"なぜ「{subject}」は{object}であるのか？",
"なぜ「{concept}」は{object}であるのか？",
"なぜ「{object}」は{body}であるのか？",
"なぜ「{object}」は{object}であるのか？",
"なぜ「{object}」は{tool}であるのか？",
"なぜ「{object}」は{concept}であるのか？",
"なぜ「{passive}」は{object}であるのか？",
"なぜ「{subject}」は{subject}であるのか？",
"なぜ「{verb}」は{subject}であるのか？",
"なぜ「{passive}」は{subject}であるのか？",
"なぜ「{concept}」は{subject}であるのか？",
"なぜ「{body}」は{subject}であるのか？",
"なぜ「{subject}」は{body}であるといえるのか？",
"なぜ「{concept}」は{body}であるといえるのか？",
"なぜ「{passive}」は{body}であるといえるのか？",
"なぜ「{verb}」は{body}であるといえるのか？",
"なぜ「{concept}」は{subject}であるといえるのか？",
"なぜ「{concept}」は{concept2}であるといえるのか？",
"なぜ「{concept}」は{object}であるといえるのか？",
"なぜ「{object}」は{concept}であるといえるのか？",
"なぜ「{object}」は{concept2}であるといえるのか？",
"なぜ「{object}」は{body}であるといえるのか？",
"なぜ「{passive}」は{object}であるといえるのか？",
"なぜ「{verb}」は{object}であるといえるのか？",
"なぜ「{verb}」は{concept}を消したのか？",
"なぜ「{object}」は{concept}を消したのか？",
"なぜ「{object}」は{subject}を消したのか？",
"なぜ「{concept}」は{subject}を消したのか？",
"なぜ「{concept}」は{object}を消したのか？",
"いかに{object}は「{subject}の潜在性」であったか？",
"いかに{subject}は「{object}の潜在性」であったか？",
"いかに{concept}は「{subject}の潜在性」であったか？",
"いかに{concept}は「{object}の潜在性」であったか？",
"いかに{object}は「{concept}の潜在性」であったか？",
"いかに{subject}は「{concept}の潜在性」であったか？",
"{object}が「{concept}」を分割したら？",
"{subject}が「{object}」を分割したら？",
"{tool}が「{object}」を分割したら？",
"{subject}が「{tool}」を分割したら？",
"{tool}が「{concept}」を分割したら？",
"{place}が「{concept}」を分割したら？",
"{concept}が「{concept}」を分割したら？",
"圧縮された「{concept}」とは？",
"圧縮された「{concept2}」とは？",
"圧縮された「{tool}」とは？",
"「{verb}{tool}」とは？",
"「{verb}{concept}」とは？",
    // 存在テンプレ
    // 行為テンプレ
"どうすれば{subject}は「{verb}こと」ができるか？",
  "どうすれば{place}は「{verb}こと」ができるか？",
  "どうすれば{tool}は「{verb}こと」ができるか？",
  "どうすれば{concept}は「{verb}こと」ができるか？",
  "どうすれば{concept2}は「{verb}こと」ができるか？",
  "どうすれば{object}は「{verb}こと」ができるか？",
  "{verb}とき、{concept}に何が起きるか？",
  "{verb}とき、{tool}に何が起きるか？",
  "{verb}とき、{subject}に何が起きるか？",
  "{body}が{passive}と、何が失われ、何が現れるのか？",
  "{tool}が{passive}と、何が失われ、何が現れるのか？",
  "{subject}が{tool}を手に入れると、どんな{concept}を起こすのか？",
  "{concept}が{tool}を手に入れると、どんな{concept}が起きるのか？",
  "{tool}を手にした{subject}はどこへ向かうのか？",
  "{concept}を手にした{subject}はどこへ向かうのか？",
  "{tool}がなかったら、{subject}は何を頼りに{verb}のか？",
  "{concept}がなかったら、{subject}は何を頼りに{verb}のか？",
  "{object}なしで{subject}は{verb}できるか？",
  "{tool}なしで{subject}は{verb}できるか？",
  "{subject}なしで{object}は{verb}できるか？",
  "{subject}なしで{concept}は{verb}できるか？",
  "{subject}が{place}で転ぶと「{concept}」はどうなる？",
  "{subject}が{tool}で転ぶと「{concept}」はどうなる？",
  "{subject}が転ぶと{concept}はどうなるか？",
  "{concept}が転ぶと{subject}はどうなるか？",
  "{concept}が転ぶと{tool}はどうなるか？",
  "{tool}が転ぶと「{concept}」はどうなる？",
  "{object}が転ぶと「{concept}」はどうなる？",
  "{object}が転ぶと「{concept2}」はどうなる？",
  "{subject}が{object}を{verb}とき、何が生まれるか？",
  "{concept}が{object}を{verb}とき、何が生まれるか？",
  "{subject}が{object}を{verb}ことをしなかったら、何が起きるか？",
  "{concept}が{object}を{verb}ことをしなかったら、何が起きるか？",
  "{subject}が{tool}によって、{object}が{verb}ならどうなるか？",
  "{concept}が{tool}によって、{object}が{verb}ならどうなるか？",
  "{subject}が{place}で、{verb}と、何が起こるか？",
  "{concept}が、{place}で{verb}と、何が起こるか？",
    // 行為テンプレ
    // 転用テンプレ
"もし{subject}が{tool}になったら、何を{verb}だろう？",
"もし{object}が{tool}になったら、何を{verb}だろう？",
"もし{concept}が{tool}になったら、何を{verb}だろう？",
"もし{tool}が{subject}になったら、何を{verb}だろう？",
"もし{tool}が{object}になったら、何を{verb}だろう？",
"もし{tool}が{concept}になったら、何を{verb}だろう？",

"{object}を逆さにしたとき、{concept}はどんなふうに見えるのか？",
"{subject}を逆さにしたとき、{object}はどんなふうに見えるのか？",
"{object}を裏返すと、{concept}はどう見える？",
"{concept}を裏返すと、{object}はどう見える？",
"{tool}を逆さにしたとき、{concept}はどう見える？",
"{concept}を逆さにしたとき、{tool}はどう見える？",
"{subject}を裏返すと、{object}はどう見える？",

"{tool}で{place}を測ると、どのような数値になるのか？",
"{concept}で{place}を測ると、どのような数値になるのか？",
"{object}で{place}を測ると、どのような数値になるのか？",
"{subject}で{place}を測ると、どのような数値になるのか？",

"{body}で{place}を歩くことは可能か？",
"{tool}で{body}を歩くことは可能か？",
"{concept}で{body}を歩くことは可能か？",
"{object}で{body}を歩くことは可能か？",

"{body}を{object}として使うとしたら？",
"{body}を{body}として使うとしたら？",
"{body}を{tool}として使うとしたら？",
"{tool}を{object}として使うとしたら？",
"{tool}を{concept}として使うとしたら？",
"{tool}を{tool}として使うとしたら？",

"{object}を転用すると何が生まれるか？",
"{subject}を転用すると何が生まれるか？",
"{tool}を転用すると何が生まれるか？",
"{concept}を転用すると何が生まれるか？",

"{object}は、「応用的{concept}」であるか？",
"{subject}は、「応用的{concept}」であるか？",
"{tool}は、「応用的{concept}」であるか？",
"{concept}は、「応用的{concept}」であるか？",

"{body}は、「応用的{tool}」であるか？",
"{object}は、「応用的{body}」であるか？",
"{subject}は、「応用的{body}」であるか？",
"{tool}は、「応用的{body}」であるか？",
"{concept}は、「応用的{body}」であるか？",

"{object}は、「応用的{tool}」であるか？",
"{subject}は、「応用的{tool}」であるか？？",
"{concept2}は、「応用的{tool}」であるか？",
"{concept}は、「応用的{tool}」であるか？",

"{object}を{subject}として扱うと、何が生まれるか？",
"{object}を{concept}として扱うと、何が生まれるか？",
"{object}を{tool}として扱うと、何が生まれるか？",
"{object}を{object}として扱うと、何が生まれるか？",
"{subject}を{body}として扱うと、何が生まれるか？",

"{subject}を{subject}として扱うと、何が生まれるか？",
"{subject}を{concept}として扱うと、何が生まれるか？",
"{subject}を{tool}として扱うと、何が生まれるか？",
"{subject}を{object}として扱うと、何が生まれるか？",
"{subject}を{body}として扱うと、何が生まれるか？",

"{body}を{subject}として扱うと、何が生まれるか？",
"{body}を{concept}として扱うと、何が生まれるか？",
"{body}を{tool}として扱うと、何が生まれるか？",
"{body}を{object}として扱うと、何が生まれるか？",
"{tool}を{body}として扱うと、何が生まれるか？",

"{concept}を{subject}として扱うと、何が生まれるか？",
"{concept}を{concept}として扱うと、何が生まれるか？",
"{concept}を{tool}として扱うと、何が生まれるか？",
"{concept}を{object}として扱うと、何が生まれるか？",
"{concept}を{body}として扱うと、何が生まれるか？",


"{tool}を{subject}として扱うと、何が生まれるか？",
"{tool}を{concept}として扱うと、何が生まれるか？",
"{tool}を{tool}として扱うと、何が生まれるか？",
"{tool}を{object}として扱うと、何が生まれるか？",
"{tool}を{body}として扱うと、何が生まれるか？",

"{object}を{tool}として使うと？",
"{subject}を{tool}として使うと？",
"{tool}を{tool}として使うと？",
"{concept}を{tool}として使うと？",
"{body}を{tool}として使うと？",

"{verb}を「{concept}」にあてはめると、どう変化するか？",
"{verb}を「{object}」にあてはめると、どう変化するか？",
"{verb}を「{tool}」にあてはめると、どう変化するか？",
"{verb}を「{subject}」にあてはめると、どう変化するか？",

"{concept}を「{concept}」にあてはめると、どう変化するか？",
"{concept}を「{object}」にあてはめると、どう変化するか？",
"{concept}を「{tool}」にあてはめると、どう変化するか？",
"{concept}を「{subject}」にあてはめると、どう変化するか？",
  
"{object}は「{object}」によって伸縮するか？",
"{object}は「{tool}」によって伸縮するか？",
"{tool}は「{object}」によって伸縮するか？",
"{tool}は「{tool}」によって伸縮するか？",
"{subject}は「{object}」によって伸縮するか？",
"{subject}は「{tool}」によって伸縮するか？",
"{concept}は「{object}」によって伸縮するか？",
"{concept}は「{tool}」によって伸縮するか？",

"{tool}を「{object}」に適用すると？",
"{tool}を「{concept}」に適用すると？",
"{concept}を「{object}」に適用すると？",
"{object}を「{tool}」に適用すると？",
"{subject}を「{object}」に適用すると？",
"{body}を「{object}」に適用すると？",
"{body}を「{concept}」に適用すると？",
"{body}を「{concept2}」に適用すると？",

"{concept}を「{body}」に適用すると？",
"{object}を「{body}」に適用すると？",
"{tool}を「{body}」に適用すると？",

"{subject}を「{concept}」として解釈したら？",
"{object}を「{concept}」として解釈したら？",
"{tool}を「{concept}」として解釈したら？",
"{concept}を「{subject}」として解釈したら？",

"{subject}を「{body}」として解釈したら？",
"{object}を「{body}」として解釈したら？",
"{tool}を「{body}」として解釈したら？",
"{concept}を「{body}」として解釈したら？",

"{concept}を{place}で使うと何が起きるか？",
"{object}を{place}で使うと何が起きるか？",
"{tool}を{place}で使うと何が起きるか？",
"{subject}を{place}で使うと何が起きるか？",

"{object}を{subject}にしてみたら？",
"{tool}を{subject}にしてみたら？",
"{concept}を{subject}にしてみたら？",
"{object}を{tool}にしてみたら？",

"{body}の動きを{tool}で再現できるか？",
"{body}の動きを{object}で再現できるか？",
"{object}の動きを{tool}で再現できるか？",
"{tool}の動きを{subject}で再現できるか？",

"{object}を{body}で表現すると？",
"{concept}を{body}で表現すると？",
"{tool}を{body}で表現すると？",
"{subject}を{body}で表現すると？",

"{concept}を反転させて使うと？",
"{object}を反転させて使うと？",
"{tool}を反転させて使うと？",
"{subject}を反転させて使うと？",

"{subject}の役割を{object}に入れ替えると？",
"{object}の役割を{subject}に入れ替えると？",
"{tool}の役割を{subject}に入れ替えると？",
"{concept}の役割を{subject}に入れ替えると？",

"{tool}を{concept2}として使うとどんな可能性があるか？",
"{subject}を{place}に設置すると？",
    // 転用テンプレ

    // 抽象テンプレ
"{subject}の中で{concept}が芽生えるのはいつか？",
"{concept}の中で{subject}が芽生えるのはいつか？",
"{body}の中で{concept}が芽生えるのはいつか？",
"{tool}の中で{concept}が芽生えるのはいつか？",

"{body}で感じる{concept}とはどんなものか？",
"{body}で感じる{tool}とはどんなものか？",
"{body}で感じる{verb}とはどんなものか？",
"{tool}で感じる{concept}とはどんなものか？",
"{tool}で感じる{verb}とはどんなものか？",


"{subject}の「{concept}」はどのように現れるのか？",
"{body}の「{verb}」はどのように現れるのか？",
"{tool}の「{concept}」はどのように現れるのか？",
"{tool}の「{body}」はどのように現れるのか？",
"{body}の「{tool}」はどのように現れるのか？",

"{subject}の「{concept}性」はどのように現れるのか？",
"{body}の「{verb}」特性はどのように現れるのか？",
"{tool}の「{concept}性」はどのように現れるのか？",
"{tool}の「{body}性」はどのように現れるのか？",
"{body}の「{tool}性」はどのように現れるのか？",


"{concept}にとって{subject}の本質は？",
"{concept}にとって{tool}の本質は？",

"{concept}と{concept2}の間には何が潜んでいるのか？",
"{concept}と{tool}の間には何が潜んでいるのか？",

"{place}に{object}が現れると、{concept}はどう変化するか？",
"{place}に{object}が現れると、{tool}はどう変化するか？",
"{concept}と{subject}の間には何が潜んでいるのか？",
"{subject}と{object}の間には何が潜んでいるのか？",
"{concept}と{object}の間には何が潜んでいるのか？",
"{object}と{concept2}の間には何が潜んでいるのか？",
"{object}と{object}の間には何が潜んでいるのか？",
"{subject}と{concept2}の間には何が潜んでいるのか？",
"{subject}と{place}の間には何が潜んでいるのか？",
"{concept}と{place}の間には何が潜んでいるのか？",
"{object}と{place}の間には何が潜んでいるのか？",

"{concept}にとって{concept}の背後にあるものは何か？",
"{tool}にとって{concept}の背後にあるものは何か？",
"{object}にとって{concept}の背後にあるものは何か？",
"{subject}にとって{concept}の背後にあるものは何か？",

"{subject}的「{concept}」の本質は何か？",
"{object}的「{concept}」の本質は何か？",
"{place}的「{concept}」の本質は何か？",
"{body}的「{concept}」の本質は何か？",

"{subject}的「{tool}」の本質は何か？",
"{concept}的「{tool}」の本質は何か？",
"{place}的「{tool}」の本質は何か？",
"{body}的「{tool}」の本質は何か？",

"{concept}が{subject}に現れるとき、何が見えるのか？",
"{object}が{place}に現れると、{concept}はどのように変化するか？",

"{object}が{subject}に現れるとき、何が見えるのか？",
"{object}が{body}に現れると、{concept}はどのように変化するか？",

"{tool}が{body}に現れるとき、何が見えるのか？",
"{object}が{body}に現れると、{concept}はどのように変化するか？",

"{subject}の中で「{concept2}」が芽生えるのはどんなときか？",
"{object}の中で「{concept2}」が芽生えるのはどんなときか？",
"{tool}の中で「{concept2}」が芽生えるのはどんなときか？",
"{concept}が「{object}」に現れるとき、何が生じるのか？",
"{concept}が「{body}」に現れるとき、何が生じるのか？",

"「{concept}」は、どのようにして{subject}に浸透するのか？",
"「{concept}」は、どのようにして{body}に浸透するのか？",
"「{tool}性」は、どのようにして{body}に浸透するのか？",
"「{tool}性」は、どのようにして{subject}に浸透するのか？",

"{object}はどのようにして{concept}を包摂するのか？",
"{tool}はどのようにして{concept}を包摂するのか？",
"{concept}はどのようにして{tool}を包摂するのか？",
"{concept}はどのようにして{object}を包摂するのか？",
"{subject}と{object}の関係は、なぜ「{tool}的」と言えるのか？",
"{concept}と{concept2}の関係は、なぜ「{tool}的」と言えるのか？",

"{subject}と{object}の関係は、なぜ「{object}的」と言えるのか？",
"{concept}と{concept2}の関係は、なぜ「{object}的」と言えるのか？",

"{tool}と{object}の関係は、なぜ「{subject}的」と言えるのか？",
"{concept}と{concept2}の関係は、なぜ「{subject}的」と言えるのか？",

"{subject}の経験は、なぜ「{subject}的」なのか？",
"{tool}的経験は、なぜ「{concept}的」なのか？",
"{concept}的経験は、なぜ「{tool}的」なのか？",

"{concept}はどのように「{tool}化」されうるか？",
"{concept}はどのように「{object}化」されうるか？",
"{concept}はどのように「{concept}化」されうるか？",

"{subject}はどのように「{tool}化」されうるか？",
"{subject}はどのように「{object}化」されうるか？",
"{subject}はどのように「{concept}化」されうるか？",

"なぜ{concept}は、端的に{tool}と言えるのか？",
"なぜ{object}は、端的に{tool}と言えるのか？",

"{concept}の要約が「{tool}」である理由は？",
"{subject}の要約が「{tool}」である理由は？",
"{object}の要約が「{tool}」である理由は？",
"{tool}の要約が「{concept}」である理由は？",
"{object}の要約が「{body}」である理由は？",
"{concept}の要約が「{body}」である理由は？",

"{concept}から導き出せる「{body}性」とは？",
"{object}から導き出せる「{body}性」とは？",
"{subject}から導き出せる「{body}性」とは？",
"{tool}から導き出せる「{body}性」とは？",

"{concept}から導き出せる「{tool}性」とは？",
"{object}から導き出せる「{tool}性」とは？",
"{subject}から導き出せる「{tool}性」とは？",
"{tool}から導き出せる「{tool}性」とは？",

"{tool}的{tool}とは？",
"{concept}的{tool}とは？",
"{tool}的{concept}とは？",
"{tool}的{object}とは？",
"{tool}的{subject}とは？",
"{concept}と{concept2}の共通点が「{object}」である理由は？",
"{subject}と{object}の共通点が「{object}」である理由は？",
"{tool}と{concept}の共通点が「{object}」である理由は？",

"{concept}と{concept2}の共通点が「{body}」である理由は？",
"{subject}と{object}の共通点が「{body}」である理由は？",
"{tool}と{concept}の共通点が「{body}」である理由は？",

"{concept}と{concept2}の共通点が「{tool}」である理由は？",
"{subject}と{object}の共通点が「{tool}」である理由は？",
"{body}と{concept}の共通点が「{tool}」である理由は？",

"{concept}と{concept2}の相違点が「{object}」である理由は？",
"{subject}と{object}の相違点が「{object}」である理由は？",
"{tool}と{concept}の相違点が「{object}」である理由は？",

"{concept}と{concept2}の相違点が「{body}」である理由は？",
"{subject}と{object}の相違点が「{body}」である理由は？",
"{tool}と{concept}の相違点が「{body}」である理由は？",

"{concept}と{concept2}の相違点が「{tool}」である理由は？",
"{subject}と{object}の相違点が「{tool}」である理由は？",
"{body}と{concept}の相違点が「{tool}」である理由は？",

  // その他（分類不要）
"{concept}は{tool}からやってくるのか？",
"{tool}の{concept}はどのように現れるのか？",
"{place}に{object}が現れると、{concept}はどう変化するか？",
"{concept}が{tool}を手に入れると、どんな{concept}が起きるのか？",
"{subject}が{tool}を手に入れると、どんな{concept}を起こすのか？",
"{tool}を手にした{subject}はどこへ向かうのか？",
"{body}で感じる{concept}とはどんなものか？",
"{subject}は{place}に溶けることができるか？",
"「{concept}」は{body}に触れるのか？",
"「{tool}」は{concept}に触れるのか？",

"{subject}は{concept}によってどうなるか？",
"{subject}は{concept}によって証明されるか？",
"{concept2}は{concept}によって証明されるか？",

"{object}を逆さにしたとき、{concept}はどんなふうに見えるのか？",
"{subject}を逆さにしたとき、{object}はどんなふうに見えるのか？",
"{body}で{place}を歩くことは可能か？",
"{object}を裏返すと、{concept}はどう見える？",
"{tool}で{place}を測ると、どのような数値になるのか？"
];

export const vocab = {
  subject: [
    
    "人間", "植物", "AI", "雨", "都市", "感情", "制度", "集合体", "群れ", "惑星",
    "菌類", "言語", "霧", "動物", "時間", "電気", "海", "家族", "子ども",
    "詩人", "観客", "記憶", "風", "異邦人", "ロボット", "声", "無機物", "祖先",
    "自己", "偶像", "石", "雲", "影", "動物", "機械", "時間", "他者","鼻歌","鶏肉",
    "微粒子", "歌", "記憶", "ノイズ", "穴", "手", "無意識", "境界","音","音楽",
    "ひび割れ","ライオン","猫","馬","狼","老犬", "樹木", "植物", "肉食", "草食", 
    "装飾", "稲穂", "枯れ木", "若葉", "鉱物", "ガラス", "鼻毛", "目頭", "風力", 
    "地下熱", "熱力学", "位置エネルギー"
  
  ],

   // 行為
  verb: [

  "踊る", "怒る", "生まれる", "裏返す", "裏返る", "裏切る", "排泄する", "飲食する",
  "越境する", "顛倒する", "拡大する", "拡散する", "滑る", "崩れる", "繋がる",
  "繋げる", "考える", "施工する", "刻む", "思考する", "凝固する", "逆転する",
  "消える", "消失する", "循環する", "収束する", "沈黙する", "沈む", "跳ねる",
  "反射する", "反転する", "反覆する", "漂う", "変形する", "変換する", "崩す", 
  "変質する", "分裂する", "発光する", "ひっくり返す", "眠る", "にじむ", "拗れる", 
  "光る", "動く", "柔らかくなる", "模倣する", "重なる", "裂ける", "歌う",
  "逃げる", "固まる", "笑う", "苦笑する", "伝播する", "見る", "見える", "回転する", 
  "流す", "停滞する", "惑わす", "拡張する", "充填する", "補填する", "充足する", 
  "削る", "欠く", "削ぐ", "置換する", "置き換える", "代替する", "代表する"

],

　passive: [

  "圧縮される", "外在化される", "観察される", "観測される", "揺られる",
  "越境される", "解体される", "隠される", "凍させる", "共鳴される",
  "凝固される", "凝縮される", "混入される", "混濁される", "制御される",
  "消失される", "消費される", "昇華される", "跳ねられる", "遮光される",
  "遮断される", "収束される", "重なられる", "追い出される", "統合される",
  "投影される", "動かされる", "転ばされる", "反映される", "反転される",
  "発光される", "包まれる", "分断される", "分裂される", "眠らされる",
  "流される", "裂けられる", "怒られる", "裏切られる", "浮遊される",
  "崩壊される", "変形される", "変容される", "忘れられる", "溶かされる",
  "再定義される", "圧迫される", "圧縮される", "増幅させられる", "裏がえられる",
  "ねじ伏せられる", "抑圧をうける", "模倣される", "置換される", "転倒させられる"

],

  // 概念
  concept:[
  "起源", "影", "意図", "位相", "一致", "排便",
  "行為", "行動", "屈折", "偶然", "乖離", "エントロピー",
  "階層", "解放", "関係", "希薄さ", "逆説",
  "強度", "教示", "記憶", "屈折", "空白",
  "結晶", "抑圧", "層", "孤独", "否定", "階層",
  "集中", "証明", "触覚", "触発", "構造", "ヒエラルキー",
  "行為", "季節", "行動", "光", "分節", "硬直",
  "深度", "単純性", "断片化", "断絶", "彫刻",
  "多義性", "多重性", "倒置", "置換", "速度",
  "層", "屈折", "密度", "無限", "無意識",
  "模倣", "分解", "分裂", "変位", "変化",
  "発生", "不安", "不純さ", "分析", "分節",
  "分断", "分離", "並列", "変質", "予感",
  "余剰", "余白", "認識", "認知", "反復",
  "流動性", "流通", "連結", "連想", "抑圧",
  "屈折", "絵画", "弁証法", "光", "圧縮",
  "偶然", "記憶", "重厚さ", "重力", "層",
  "分節", "触覚", "透明性", "密度", "分析",
  "変換", "境界", "抑圧", "象徴", "対立",
  "倒置", "多義性", "断絶", "断片化", "抑圧",
  "多様性", "分離", "空白", "再定義", "断片化",
  "透明性", "複写", "複雑性", "発生", "分節",
  "分裂", "分断", "模倣", "余剰", "予感",
  "抑圧", "連想", "層", "速度", "証明",
  "誘導", "熱", "ノイズ", "無限", "連結",
  "力", "屈折", "連結", "分解", "再定義",
  "予感", "誘導", "行為", "光", "証明", "逆説"
],
  // もう一つの概念
  concept2: [
  "位相", "偶然", "乖離", "開放", "逆説", "エントロピー",
  "記憶", "希薄さ", "空白", "行動", "行為","ヒエラルキー",
  "境界", "孤独", "屈折", "希薄さ", "集中", "排便",
  "象徴", "触覚", "触発", "循環", "純粋さ",
  "深度", "彫刻", "時間", "重厚さ", "重力",
  "多義性", "多重性", "単純性", "断片化", "断絶",
  "知覚", "秩序", "透明性", "動揺", "倒置",
  "分解", "分節", "分裂", "分離", "発生",
  "発展", "表層", "不安", "不純さ", "複写",
  "複雑性", "閉塞", "変位", "変化", "無意識",
  "無限", "予感", "誘導", "流通", "流動性",
  "連想", "忘却"
  ],
  // 場所
  place: [
  "アパートの廊下", "インフラ", "宇宙船", "植木鉢の底", "温室",
  "屋上", "鏡の中", "仮想空間", "階段の踊り場", "交差点",
  "鏡の中", "カフェのテラス", "境界線上", "机の引き出し", "虚空",
  "虚数空間", "クローゼットの隅", "コップの中", "ゴミ箱の影", "砂漠のオアシス",
  "砂浜", "ジャングル", "磁場", "地下", "地下鉄の連絡通路",
  "通路", "洞窟", "ドレインの蓋の下", "都市の隙間", "非常階段",
  "蜂の巣の空洞", "排水溝", "排水管", "橋げたの裏", "バス停のベンチ下",
  "ベランダの端", "ベッド", "部屋", "縁", "ひび割れ",
  "広場", "風穴", "窓辺", "水道管", "水たまり",
  "水路の脇", "森", "窓辺", "霧の中", "断層",
  "電車の中", "トイレ", "トイレの壁の落書きのそば", "雲の切れ間"
  ],
  // オブジェクト
  object: [
  "アイロン", "いちご", "影", "油", "油粘土",
  "ウイルス", "嘔吐物", "壺", "椅子", "石", "梯子",
  "石英", "石彫", "液晶", "空気","空間", "手紙", "仮面", 
  "塊", "回路図", "階段", "ガラス", "ガラス玉", "硫黄",
  "キャンディー", "吸殻", "球体", "巨石", "金継ぎ", "線", "面",
  "金貨", "金だらい", "針", "針金", "記号", "鉄鉱石",
  "緩衝材", "キュウリ", "組み木", "コード", "稲穂",
  "ゴム手袋", "コンクリートブロック", "光", "光子", "鉱石",
  "黒糖", "境界", "境界石", "境界線", "紙の束","煙",
  "計算機", "結晶", "ケチャップ", "装飾", "香水",
  "ケーキ", "骨片", "コンパス", "コンニャク", "豆腐", "ラーメン",
  "紫芋", "栽培植物", "栽培土", "サボテン", "魚肉ソーセージ",
  "種", "種子", "数字", "スイッチ", "スルメ",
  "単管", "断片", "地図", "茶碗", "チーズ",
  "チョコレート", "吊革", "タッパー", "時計", "陶磁器",
  "土埃", "土囊袋", "動物", "道具", "鳥の死骸",
  "ドレッシング", "殴り書き", "名前", "ナイフ", "ナプキン",
  "ナメクジ", "ニンジン", "ぬいぐるみ", "熱", "ノイズ",
  "発泡スチロール", "バター", "バゲット", "パテ", "パレット",
  "波", "波形", "バット", "花瓶", "発酵食品", "コーヒーカップ",
  "発酵菌", "ペットボトル", "プラスチック片", "布", "布きれ",
  "粉末", "分子", "浮き輪", "ベニヤ板", "猟銃",
  "模型", "モルタル片", "木片", "木炭", "木彫", "ソーセージ",
  "水石", "水素", "メロン", "樹脂", "肉塊", "ベーコン",
  "煙", "容器", "力", "デジタル時計", "緑茶", "フライドポテト",
  "冷蔵庫", "ローソク", "ロープ", "落書き", "鳥の羽",
  "銅像", "鉄", "鉄屑", "断片", "海老フライ", "電波", "粘土", 
  "ハンバーガー", "資材", "クランプ", "石膏ボード", "鉄板", 
  "枯れ枝", "石炭", "鋳造", "吐瀉物", "微生物", "微粒子", "ハエ", "カニ",
  "電流", "壺", "磁石", "ピスタチオ", "ティッシュ", "トラロープ", "屎尿",
  "折り紙", "ワイヤー", "つっぱり棒", "ゴム"
  ],
  // 道具
  tool: [
  "アルゴリズム", "暗号", "暗黙知", "インパクトドライバー", "エアコンプレッサ",
  "LEDライト", "エンジン", "延長コード", "鍋", "カゴ", "鉛筆", "切削工具", 
  "カメラ", "缶切り", "缶詰", "換気扇", "概念モデル", "電卓", "ドリル", 
  "ガスコンロ", "ガスバーナー", "机", "期待", "給湯器", "炎", "火", 
  "協定", "軍手", "グラインダー", "計画", "金尺", "定規", "びっくり水", 
  "金切りバサミ", "金づち", "金だらい", "釘", "クランプ", "傘",
  "靴", "靴べら", "構文", "交番", "工芸道具", "かまど",  "炊飯器", 
  "コンパス", "コンピューター", "コンロ", "ジェスチャー", "信号",
  "シュロ縄", "水平器", "数式", "スコップ", "スクイージー",
  "スパナ", "スパム", "スライド丸ノコ", "菜箸", "洗剤", "電動工具",
  "洗濯機", "洗濯板", "蛇口", "ぞうきん", "双眼鏡", "ドリルビット",
  "ソフトウェア", "速乾剤", "たき火", "タイル", "タイヤ",
  "卓上ノコギリ", "竹", "蛇口", "単管", "チョーク",
  "手", "手のこ", "手順", "針", "針と糸", "手鏡", "液晶モニター",
  "ハサミ", "ハンマー", "ハンドクリーナー", "ハシゴ", "パレット",
  "バスケット", "バット", "ビー玉", "火打ち石", "火薬",
  "ひも", "フィードバック", "フィルター", "笛", "袋",
  "袋詰め", "袋物", "分度器", "ボールペン", "ホッチキス",
  "保護メガネ", "ボンド", "棒", "ポット", "プロトコル",
  "まな板", "マイナスドライバー", "丸ノコ", "ミシン", "ミラー",
  "メモリー", "木づち", "木材", "モルタル", "モンキーレンチ",
  "やかん", "やすり", "指", "予備バッテリー", "ラジオ",
  "レンズ", "六角レンチ", "ルール", "冷蔵庫", "ろうそく",
  "ろくろ", "ローソク", "ロープ", "紙コップ", "紙やすり",
  "規範", "規則性", "境界設定", "釘", "車輪",
  "下水管", "針金", "計算機", "ジェスチャー", "信号",
  "仮説", "観点", "パテ", "プラスドライバー", "ピンセット"
  
  ],
  // 身体
  body: [
 "あご", "あばら骨", "アキレス腱", "足", "足の爪",
  "汗腺", "味覚", "人工筋肉", "人工股関節", "義手",
  "義足", "胃", "腕", "奥歯", "額（ひたい）",
  "肝臓", "関節", "頸", "頸骨", "肛門",
  "交感神経", "口", "口唇", "口内炎", "口髭",
  "鼓膜", "肛門", "膝", "膝小僧", "膝頭",
  "脇", "脇腹", "肘", "肘鉄", "集合意識",
  "下顎骨", "鎖骨", "肩", "肩甲骨", "小指",
  "指", "指先", "舌", "触覚", "循環器",
  "柔毛", "十二指腸", "消化器", "上唇", "心臓",
  "出臍（でべそ）", "親指", "親知らず", "神経", "唾液腺",
  "肘鉄", "脳", "のど", "鼻", "鼻毛",
  "肺", "白髪", "背中", "背骨", "皮下脂肪",
  "皮膚", "膀胱", "副交感神経", "ふくらはぎ", "鼓膜",
  "まぶた", "巻かれた大腸", "泌尿器", "眉", "脛",
  "目", "眼球", "毛", "弁慶の泣きどころ", "膀胱",
  "膝裏", "筋", "筋肉", "にきび", "中指",
  "脳", "肋骨", "臍", "力こぶ", "力",
  "舌", "爪弾き", "つま先", "出臍", "爪弾き",
  "消化器", "チアノーゼ", "鼓膜", "鼓膜", "唇",
  "肩", "肝臓", "胆のう", "集合意識", "肩甲骨",
  "柔毛", "下顎骨", "膝裏", "膝小僧", "肛門"
  ]
};
