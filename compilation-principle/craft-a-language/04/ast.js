"use strict";
/**
* AST
* @version 0.2
* @author 宫文学
* @license 木兰开源协议
* @since 2021-06-04
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.AstVisitor = exports.BooleanLiteral = exports.NullLiteral = exports.DecimalLiteral = exports.IntegerLiteral = exports.StringLiteral = exports.Variable = exports.FunctionCall = exports.ExpressionStatement = exports.Binary = exports.Expression = exports.Statement = exports.VariableDecl = exports.Prog = exports.Block = exports.FunctionDecl = exports.Decl = exports.AstNode = void 0;
////////////////////////////////////////////////////////////////////////////////
//Parser
/**
 * AST基类
 */
class AstNode {
}
exports.AstNode = AstNode;
/**
 * 声明
 * 所有声明都会对应一个符号。
 */
class Decl {
    constructor(name) {
        this.name = name;
    }
}
exports.Decl = Decl;
/**
 * 函数声明节点
 */
class FunctionDecl extends Decl {
    constructor(name, body) {
        super(name);
        this.body = body;
    }
    accept(visitor) {
        return visitor.visitFunctionDecl(this);
    }
    dump(prefix) {
        console.log(prefix + "FunctionDecl " + this.name);
        this.body.dump(prefix + "    ");
    }
}
exports.FunctionDecl = FunctionDecl;
/**
 * 函数体
 */
class Block extends AstNode {
    constructor(stmts) {
        super();
        this.stmts = stmts;
    }
    accept(visitor) {
        return visitor.visitBlock(this);
    }
    dump(prefix) {
        console.log(prefix + "Block");
        this.stmts.forEach(x => x.dump(prefix + "    "));
    }
}
exports.Block = Block;
/**
 * 程序节点，也是AST的根节点
 */
class Prog extends Block {
    accept(visitor) {
        return visitor.visitProg(this);
    }
    dump(prefix) {
        console.log(prefix + "Prog");
        this.stmts.forEach(x => x.dump(prefix + "    "));
    }
}
exports.Prog = Prog;
/**
 * 变量声明节点
 */
class VariableDecl extends Decl {
    constructor(name, varType, init) {
        super(name);
        this.varType = varType;
        this.init = init;
    }
    accept(visitor) {
        return visitor.visitVariableDecl(this);
    }
    dump(prefix) {
        console.log(prefix + "VariableDecl " + this.name + ", type: " + this.varType);
        if (this.init == null) {
            console.log(prefix + "no initialization.");
        }
        else {
            this.init.dump(prefix + "    ");
        }
    }
}
exports.VariableDecl = VariableDecl;
/**
 * 语句
 * 其子类包括函数声明、表达式语句
 */
class Statement extends AstNode {
}
exports.Statement = Statement;
/**
 * 语句
 * 其子类包括函数声明、表达式语句
 */
class Expression extends AstNode {
}
exports.Expression = Expression;
/**
 * 二元表达式
 */
class Binary extends Expression {
    constructor(op, exp1, exp2) {
        super();
        this.op = op;
        this.exp1 = exp1;
        this.exp2 = exp2;
    }
    accept(visitor) {
        return visitor.visitBinary(this);
    }
    dump(prefix) {
        console.log(prefix + "Binary:" + this.op);
        this.exp1.dump(prefix + "    ");
        this.exp2.dump(prefix + "    ");
    }
}
exports.Binary = Binary;
/**
 * 表达式语句
 * 就是在表达式后面加个分号
 */
class ExpressionStatement extends Statement {
    constructor(exp) {
        super();
        this.exp = exp;
    }
    accept(visitor) {
        return visitor.visitExpressionStatement(this);
    }
    dump(prefix) {
        console.log(prefix + "ExpressionStatement");
        this.exp.dump(prefix + "    ");
    }
}
exports.ExpressionStatement = ExpressionStatement;
/**
 * 函数调用
 */
class FunctionCall extends AstNode {
    constructor(name, parameters) {
        super();
        this.decl = null; //指向函数的声明
        this.name = name;
        this.parameters = parameters;
    }
    accept(visitor) {
        return visitor.visitFunctionCall(this);
    }
    dump(prefix) {
        console.log(prefix + "FunctionCall " + this.name + (this.decl != null ? ", resolved" : ", not resolved"));
        this.parameters.forEach(x => x.dump(prefix + "    "));
    }
}
exports.FunctionCall = FunctionCall;
/**
 * 变量引用
 */
class Variable extends Expression {
    constructor(name) {
        super();
        this.decl = null; //指向变量声明
        this.name = name;
    }
    accept(visitor) {
        return visitor.visitVariable(this);
    }
    dump(prefix) {
        console.log(prefix + "Variable: " + this.name + (this.decl != null ? ", resolved" : ", not resolved"));
    }
}
exports.Variable = Variable;
/**
 * 字符串字面量
 */
class StringLiteral extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitStringLiteral(this);
    }
    dump(prefix) {
        console.log(prefix + this.value);
    }
}
exports.StringLiteral = StringLiteral;
/**
 * 整型字面量
 */
class IntegerLiteral extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitIntegerLiteral(this);
    }
    dump(prefix) {
        console.log(prefix + this.value);
    }
}
exports.IntegerLiteral = IntegerLiteral;
/**
 * 实数字面量
 */
class DecimalLiteral extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitDecimalLiteral(this);
    }
    dump(prefix) {
        console.log(prefix + this.value);
    }
}
exports.DecimalLiteral = DecimalLiteral;
/**
 * null字面量
 */
class NullLiteral extends Expression {
    constructor() {
        super();
        this.value = null;
    }
    accept(visitor) {
        return visitor.visitNullLiteral(this);
    }
    dump(prefix) {
        console.log(prefix + this.value);
    }
}
exports.NullLiteral = NullLiteral;
/**
 * Boolean字面量
 */
class BooleanLiteral extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitBooleanLiteral(this);
    }
    dump(prefix) {
        console.log(prefix + this.value);
    }
}
exports.BooleanLiteral = BooleanLiteral;
////////////////////////////////////////////////////////////////////////////////
//Visitor
/**
 * 对AST做遍历的Vistor。
 * 这是一个基类，定义了缺省的遍历方式。子类可以覆盖某些方法，修改遍历方式。
 */
class AstVisitor {
    //对抽象类的访问。
    //相应的具体类，会调用visitor合适的具体方法。
    visit(node) {
        return node.accept(this);
    }
    visitProg(prog) {
        let retVal;
        for (let x of prog.stmts) {
            retVal = this.visit(x);
        }
        return retVal;
    }
    visitVariableDecl(variableDecl) {
        if (variableDecl.init != null) {
            return this.visit(variableDecl.init);
        }
    }
    visitFunctionDecl(functionDecl) {
        return this.visitBlock(functionDecl.body);
    }
    visitBlock(Block) {
        let retVal;
        for (let x of Block.stmts) {
            retVal = this.visit(x);
        }
        return retVal;
    }
    visitExpressionStatement(stmt) {
        return this.visit(stmt.exp);
    }
    visitBinary(exp) {
        this.visit(exp.exp1);
        this.visit(exp.exp2);
    }
    visitIntegerLiteral(exp) {
        return exp.value;
    }
    visitDecimalLiteral(exp) {
        return exp.value;
    }
    visitStringLiteral(exp) {
        return exp.value;
    }
    visitNullLiteral(exp) {
        return exp.value;
    }
    visitBooleanLiteral(exp) {
        return exp.value;
    }
    visitVariable(variable) {
        return undefined;
    }
    visitFunctionCall(functionCall) {
        return undefined;
    }
}
exports.AstVisitor = AstVisitor;
