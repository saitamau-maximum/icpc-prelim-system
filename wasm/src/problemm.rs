use rand;
use rand::prelude::*;
use rand_chacha::ChaCha8Rng;

pub fn generate(caseid: u64) -> Vec<(i32, i32, i32, i32)> {
    let mut rng = ChaCha8Rng::seed_from_u64(caseid);
    let mut ret = Vec::new();
    for _ in 0..100 {
        let mut a = rng.gen_range(0..101);
        let b = rng.gen_range(0..101);
        let c = rng.gen_range(0..101);
        let d = rng.gen_range(0..101);
        if a + b + c + d == 0 {
            a = rng.gen_range(1..101);
        }
        ret.push((a, b, c, d));
    }
    ret.push((0, 0, 0, 0));
    ret
}

fn gcd(a: i32, b: i32) -> i32 {
    if b == 0 {
        a
    } else {
        gcd(b, a % b)
    }
}

fn modelans(testcase: &Vec<(i32, i32, i32, i32)>) -> Vec<i32> {
    let mut ret = Vec::new();
    for (a, b, c, d) in testcase {
        if *a == 0 && *b == 0 && *c == 0 && *d == 0 {
            break;
        }
        let mut ans = gcd(*a, *b);
        ans = gcd(ans, *c);
        ans = gcd(ans, *d);
        ret.push(ans);
    }
    ret
}

pub fn validate(testid: u64, ans: &str) -> bool {
    let testcase = generate(testid);
    let modelans = modelans(&testcase);
    let mut vans = Vec::new();
    for line in ans.lines() {
        vans.push(line.parse::<i32>().unwrap());
    }
    vans == modelans
}
